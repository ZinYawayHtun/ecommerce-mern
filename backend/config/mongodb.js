import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Database is connected");
    });

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'e-commerce'
        });
    } catch (error) {
        console.error("Connection error:", error);
    }
}

export default connectDB;