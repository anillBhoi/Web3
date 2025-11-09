import {Keypair, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";

const keypair = Keypair.generate();   // it generates the keypair means generate the new account or we can say new wallet 
console.log(`Public key: ${keypair.publicKey}`);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// console.log(connection);

// funding an address with SOL automatically creates an account 
const signature = await connection.requestAirdrop(
    keypair.publicKey, 
    LAMPORTS_PER_SOL
)

await connection.confirmTransaction(signature, "confirmed");

const accountInfo = await connection.getAccountInfo(keypair.publicKey);
console.log(JSON.stringify(accountInfo, null, 2));
