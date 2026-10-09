const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const app = express()
const LinkRoute = require("./routes/LinkRoute")

app.use(cors())
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI

app.get("/",(req,res)=>{
    res.json({message:`Server is running`})
})

app.use("/api/url",LinkRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

mongoose.connect(MONGO_URI).then(()=>{
    console.log("MongoDB Connected");
})