const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("users", UserSchema);   // mongoose.model("users(name_of_the_collection)", UserSchema);
module.exports = UserModel;