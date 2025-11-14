const express = require("express");
const app = express();
const {Transaction, Keypair, Connection} = require("@solana/web3.js")
require("dotenv");
const cors = require("cors");



const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/vX5IVQ9hD5nGx3mewi1RE")

// const { userModel } = require("./models");


const jwt = require("jsonwebtoken");
const JWT_SECRET = "123456"


app.use(cors());
app.use(express.json()) // its necessary for parsing the body 

// app.post("/api/v1/signup", async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     // validate the inputs, check if the user already exists, hash the password


//     const keyPair = new Keypair();

//     await userModel.create({
//         username, 
//         password,
//         publicKey: keyPair.publicKey.toString(),
//         privateKey: keyPair.secretKey.toString()
//     })
//     res.json({
//         message: keyPair.publicKey.toString()
//     })
// })
// app.post("/api/v1/signin", async(req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const user = await userModel.findOne({
//         username:username,
//         password:password
//     })
//     if(user) {
//        const token = jwt.sign({
//         id:user 
//        }, JWT_SECRET)
//        res.json({
//            token
//        }, )
//     } else{

    

//     res.status(403).json({
//         message:"Credentials are incorrect "
//     })

// }
// })

app.get("/api/v1/txn/sign", async (req, res) => {
    const serializedTransaction = req.body.message;

    const tx = Transaction.from(Buffer.from(serializedTransaction))

    const keyPair = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY));

    tx.sign(keyPair)

    const signature = await connection.sendTransaction(tx)
    console.log(signature)

    await connection.sendTransaction(tx)

    res.json({
        message:"sign up"
    })
    
})

app.get("/api/v1/txn/", (req, res) => {
    res.json({
        message:"sign up"
    })
})



console.log("backend server is running.........")
app.listen(3000);