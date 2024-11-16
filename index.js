import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MongoDBConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
};
MongoDBConn();

app.get('/', (req, res) => {
    res.send('server is running')
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});