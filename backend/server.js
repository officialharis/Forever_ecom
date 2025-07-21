import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


//App config
const app = express();
const port = process.env.PORT || 4000

// Connect to services (non-blocking)
connectDB().catch(err => {
    console.log("Failed to connect to MongoDB:", err.message);
});
connectCloudinary();
//middlewares
app.use(express.json());
app.use(cors( { origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://your-frontend-domain.vercel.app',
        'https://your-admin-domain.vercel.app',
        'https://your-frontend-domain.netlify.app',
        'https://your-admin-domain.netlify.app'
    ],
    credentials: true
}));

//api endpoint
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/',(req,res)=>{
    res.send('API Working')
    
})


app.listen(port, ()=> console.log('server started on PORT : '+ port));