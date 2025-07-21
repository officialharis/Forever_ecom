import jwt from 'jsonwebtoken';

const adminAuth = async (req,res,next) =>{
    try {
        const {token} = req.headers

        if (!token) {
            console.log('❌ No admin token provided');
            return res.json({success:false, message:"Not Authorized Login Again"});
        }

        console.log('🔍 Verifying admin token...');
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if token contains admin credentials
        if (token_decode.email === process.env.ADMIN_EMAIL &&
            token_decode.password === process.env.ADMIN_PASSWORD &&
            token_decode.isAdmin === true) {

            console.log('✅ Admin token verified successfully');
            next();
        } else {
            console.log('❌ Invalid admin token payload');
            return res.json({success:false, message:"Not Authorized Login Again"});
        }

    } catch (error) {
        console.error('❌ Admin auth error:', error.message);

        if (error.name === 'JsonWebTokenError') {
            return res.json({ success: false, message: "Invalid token signature" });
        } else if (error.name === 'TokenExpiredError') {
            return res.json({ success: false, message: "Token expired" });
        } else {
            return res.json({ success: false, message: "Authentication failed" });
        }
    }
}

export default adminAuth;