const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler")
const  cors = require("cors");

const app = express();
connectDb()
app.use(cors());
const port =process.env.PORT || 3002;
// express middleware for parse json from client POST request
app.use(express.json());

// route user
app.use("/user" , require("./Routes/userRoutes"));

// to handle error like invalid json from post 
app.use(errorHandler);

app.listen(port,()=>{
    console.log("server working");
})