const express = require("express");
const app = express();

const { userModel } = require("./models");
const { Keypair } = require("@solana/web3.js");
const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "123456"

app.use(express.json()) // its necessary for parsing the body 

app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // validate the inputs, check if the user already exists, hash the password


    const keyPair = new Keypair();

    await userModel.create({
        username, 
        password,
        publicKey: keyPair.publicKey.toString(),
        privateKey: keyPair.secretKey.toString()
    })
    res.json({
        message: keyPair.publicKey.toString()
    })
})
app.post("/api/v1/signin", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({
        username:username,
        password:password
    })
    if(user) {
       const token = jwt.sign({
        id:user 
       }, JWT_SECRET)
       res.json({
           token
       }, )
    } else{

    

    res.status(403).json({
        message:"Credentials are incorrect "
    })

}
})

app.get("/api/v1/txn/sign", (req, res) => {
    res.json({
        message:"sign up"
    })
    
})

app.get("/api/v1/txn/", (req, res) => {
    res.json({
        message:"sign up"
    })
})



app.listen(3000);