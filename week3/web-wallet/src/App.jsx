
import './App.css'
import { createMnemonic, deriveAccount } from './utils/walletUtils'


function App() {

  const handleClick = async () => {
    const mnemonic = await createMnemonic();
    console.log("Mnemonic:", mnemonic);
    const account0 = deriveAccount(mnemonic, 0);
    console.log("Account 0:", account0);
  };
  

  return (
    <>
     <h1>Test Wallet Utils</h1>
     <button onClick={handleClick}>Generete Wallet</button>
    </>
  )
}

export default App;
