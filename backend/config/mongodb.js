import mongoose from "mongoose";
import dns from "dns";

const connectDB = async()=>{
    try {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
    } catch (e) {
        console.warn("Could not set custom DNS servers:", e.message);
    }
    console.log(process.env.MONGODB_URI);
    mongoose.connection.on('connected' ,()=>{
        console.log("DB Connected");
    })
    
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
}

export default connectDB;
