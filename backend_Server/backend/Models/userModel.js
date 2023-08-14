const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "the userName field is required"]
    },
    email:{
        type: String,
        required: [true, "the userEmail field is required"],
        unique: [true , "the email is already taken"]
    },
    password:{
        type: String,
        required: [true, "the Password field is required"]
    }
},
{
    timeStamp: true
}
);

module.exports = mongoose.model("User",userSchema);