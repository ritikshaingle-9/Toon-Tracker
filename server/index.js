import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);

if (conn){
    console.log("MongoDB connected successfully");
}
};


const TvShow = [
    {
        id:1,
        moviename:"DDLJ",
    }
]

app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"server is running"});
    });

app.get("/getTvShows",(req,res)=>{
    res.status(200).json({
       success:true,
       data:TvShow,
       message:"Tv show fetched successfully",
    });
})

app.post("/postTvShows",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"created"
    })
})





const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log('server is running on port ${PORT}');
    connectDB()
});