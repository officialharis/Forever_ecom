import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "user doesn't exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            return res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log('Registration attempt:', { name, email, password: '***' });

        //checking user already exists or not
        console.log('Checking if user exists...');
        const exists = await userModel.findOne({ email });

        if (exists) {
            console.log('User already exists:', email);
            return res.json({ success: false, message: "user already exists" })
        }

        //validating email format & strong password
        if (!validator.isEmail(email)) {
            console.log('Invalid email format:', email);
            return res.json({ success: false, message: "please enter a valid email" })
        }

        if (password.length < 8) {
            console.log('Password too short');
            return res.json({ success: false, message: "please enter a strong password" })
        }

        //hashing user password
        console.log('Hashing password...');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        console.log('Creating new user...');
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        console.log('Saving user to database...');
        const user = await newUser.save()
        console.log('User saved successfully with ID:', user._id);

        const token = createToken(user._id)
        console.log('Token created successfully');

        res.json({ success: true, token })

    } catch (error) {
        console.error('Registration error:', error);

        if (error.name === 'MongooseError' || error.name === 'MongoError') {
            console.error('Database connection issue');
            res.json({ success: false, message: "Database connection error. Please try again." })
        } else {
            res.json({ success: false, message: error.message })
        }
    }
}

//route for admin login
const adminLogin = async (req, res) => {
    try {
        console.log('Admin login attempt:', req.body);

        const {email, password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            console.log('Admin credentials valid');

            // Create token with proper payload
            const token = jwt.sign(
                {
                    email: email,
                    password: password,
                    isAdmin: true
                },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            console.log('Admin token created successfully');
            res.json({success: true, token})
        } else {
            console.log('Invalid admin credentials');
            res.json({success: false, message: "Invalid credentials"})
        }

    } catch (error) {
        console.error('Admin login error:', error);
        res.json({ success: false, message: error.message })
    }
}

export { loginUser, registerUser, adminLogin }