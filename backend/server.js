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



const app = express();
const port = process.env.PORT || 4000


connectDB().catch(err => {
    console.log("Failed to connect to MongoDB:", err.message);
});
connectCloudinary();

app.use(express.json());
app.use(cors( { origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://forever-ecom-frontend-sand.vercel.app/',
        'https://forever-admin-three-jet.vercel.app/',
    ],
    credentials: true
}));


app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/',(req,res)=>{
    res.send('API Working')
    
})


app.listen(port, ()=> console.log('server started on PORT : '+ port));