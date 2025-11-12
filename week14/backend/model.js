const mongoose = require("mongoos");

mongoose.connect();

const UserSchema = mongoose.Schema({
    username: String,
    password:String, 
    privateKey: String,
    publicKey: String
})


const userModel = mongoose.Model("users", UserSchema);

module.exports = {
    userModel
}


