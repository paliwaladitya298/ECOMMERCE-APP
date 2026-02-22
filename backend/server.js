import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
// App Config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


//middlewares
app.use(express.json())  
// Allowed Origins
const allowedOrigins = [
  "https://forever-app-frontend.vercel.app",
  "https://forever-app-admin.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// api endpoints

app.use('/api/user' , userRouter)
app.use('/api/product' , productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)


app.get('/' ,(req , res)=>{
      res.send('API working')
})

app.listen(port, ()=>console.log('Server Started on PORT : ' + port))
