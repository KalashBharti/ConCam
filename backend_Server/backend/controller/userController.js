// use to remove try catch block
const asynchandler = require("express-async-handler");
const bcrypt =require("bcrypt");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken")

const register = asynchandler(async(req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password)
    {
        res.statusCode = 400;
        
        throw new Error("Some credential is missing");
    }
    const available = await User.findOne({email});

    if(available)
    {
        res.statusCode = 400;

        throw new Error("User is Already present");
    }
    // Hash the password
    const hashPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashPassword
    })

    if(user)
    {
        res.statusCode=201;
        res.send(user);
    }
    else{
        res.statusCode=400;
        throw new Error("User Creation fail");
    }

})

const login = asynchandler(async(req,res)=>{

    const{email , password} = req.body;

    if(!email || !password)
    {
        res.statusCode=400;
        
        throw new Error("Credential are missing");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password , user.password)))
    {
        const accessToken = jwt.sign(
            {
                user:{
                    name:user.name,
                    email: user.email,
                    id: user.id
                },
        },process.env.ACCESS_TOKEN,
        {expiresIn: "30m"}  // the link get expire in 1 minute 
        )
        res.status(200).json({accessToken});
    }
    else{
        res.statusCode =401;
        throw new Error("invalid credential")
    }
})

module.exports ={register,login}