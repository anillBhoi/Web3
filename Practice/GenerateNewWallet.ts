import {Keypair, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";

const keypair = Keypair.generate();   // it generates the keypair means generate the new account or we can say new wallet 
console.log(`Public key: ${keypair.publicKey}`);

const connection = new Connection("http://localhost:8899", "confirmed");

// funding an address with SOL automatically creates an account 
const signature = await connection.reques
