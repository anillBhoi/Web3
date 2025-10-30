import React, { useContext, useState } from "react";
import { WalletContext } from "./context/WalletContext";
import "./App.css";

function App() {
  const { mnemonic, accounts, createNewWallet, addAccount, fetchBalances } =
    useContext(WalletContext);
  const [accountIndex, setAccountIndex] = useState(1);
  const [showSeed, setShowSeed] = useState(false);

  const handleCreateWallet = async () => {
    await createNewWallet();
    setShowSeed(true);
  };

  return (
    <div className="container">
      <h1 className="title">
        <span role="img" aria-label="wallet">
          🦊
        </span>{" "}
        Mini Crypto Wallet
      </h1>

      {/* ======== STEP 1: Seed Phrase UI ======== */}
      {showSeed && mnemonic ? (
        <div className="seed-container">
          <h2>Your Secret Recovery Phrase</h2>
          <p className="note">
            🧠 Write these words down in order and keep them safe. Do not share
            them with anyone — this is the key to your wallet.
          </p>
          <div className="seed-box">
            {mnemonic.split(" ").map((word, index) => (
              <div key={index} className="seed-word">
                <span>{index + 1}.</span> {word}
              </div>
            ))}
          </div>
          <button className="proceed" onClick={() => setShowSeed(false)}>
            ✅ I’ve Saved My Seed Phrase
          </button>
        </div>
      ) : !mnemonic ? (
        // ======== STEP 0: Create Wallet ========
        <button className="create" onClick={handleCreateWallet}>
          🚀 Create New Wallet
        </button>
      ) : (
        // ======== STEP 2: Wallet Dashboard ========
        <>
          <p className="mnemonic">
            <strong>Mnemonic:</strong> {mnemonic}
          </p>

          <div className="controls">
            <input
              type="number"
              min="1"
              value={accountIndex}
              onChange={(e) => setAccountIndex(Number(e.target.value))}
            />
            <button onClick={() => addAccount(accountIndex)}>
              ➕ Add Account #{accountIndex}
            </button>
            <button className="fetch" onClick={fetchBalances}>
              💰 Fetch Balances
            </button>
          </div>

          <div className="accounts">
            {accounts.length > 0 ? (
              accounts.map((acc, i) => (
                <div className="card" key={i}>
                  <h3>Account {i}</h3>
                  <p>
                    <strong>Address:</strong> {acc.address}
                  </p>
                  <p>
                    <strong>Balance:</strong>{" "}
                    {acc.balance ? `${acc.balance} ETH` : "Not fetched"}
                  </p>
                </div>
              ))
            ) : (
              <p>No accounts found. Create one above 👆</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
