
import './App.css'
import { Transaction, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import axios  from "axios"

const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/i2-Fzc1-58xI4PbQnyjRx")
const fromPubkey = new PublicKey("0x14054957bBc9705bAaEc0E644301d2c216fEcD0e")

function App() {

 async function sendSol() {
     const ix = SystemProgram.transfer({
      fromPubkey: fromPubkey,
      toPubkey: new PublicKey
      ("bwcgCuvf8AufaJ6E2R3QhLGJPeMfL7xZbt3KfHMx3J7"),
       lamports: 0.001 * LAMPORTS_PER_SOL
     }) 
     const tx = new Transaction().add(ix);

     const { blockhash } = await connection.getLatestBlockhash();
     tx.recentBlockhash = blockhash;
     tx.feePayer = fromPubkey

     // convert the transasction into a bunch of bytes
     const serializedTx = tx.serialize({
      requireAllSignatures : false,
      verifySignatures : false
     });

     console.log(serializedTx);

    await axios.post("/api/v1/txn/sign", {
      message: serializedTx,
      retry : false
     })
  }

  return (
    <>
      <input type='text' placeholder='Amount'></input>
       <input type='text' placeholder='Address'></input>
       <button onClick={sendSol} >Submit</button>
       
    </>
  )
}

export default App
