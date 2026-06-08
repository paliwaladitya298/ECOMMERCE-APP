import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Database & Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://forever-app-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server Started on PORT: ${port}`);
});
