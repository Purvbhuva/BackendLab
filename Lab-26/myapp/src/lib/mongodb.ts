import mongoose from 'mongoose'

const connection = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        
        await mongoose.connect(process.env.MONGOURL!)
        console.log("Connected to MongoDB database");
    } catch (err) {
        console.log("MongoDB Connection Error:", err);
    }
}

export default connection