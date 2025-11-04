import { useConnection, useWallet } from "@solana/wallet-adapter-react"

// The useWallet 'Hook' provides the wallet variable inside the Airdrop component.
// because i wrapped the airdrop component inside the walletprovider.
export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    // define the component inside the body 
    async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, 1000000000)
        alert("airdropped sol")
        //  alert(wallet.publicKey.toString())
    } 
    return <div>
        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}