import React, { useContext, useState } from "react";
import { WalletContext } from "./context/WalletContext";
import { SolanaContext } from "./context/SolanaContext";
import "./App.css";

function App() {
  const eth = useContext(WalletContext);
  const sol = useContext(SolanaContext);

  const [network, setNetwork] = useState("ethereum");
  const [showSeed, setShowSeed] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [accountIndex, setAccountIndex] = useState(1);

  const active = network === "ethereum" ? eth : sol;

  const handleCreateWallet = async () => {
    await active.createNewWallet();
    setShowSeed(true);
  };

  return (
    <div className="container">
      <h1 className="title">🦊 Multi-Network Crypto Wallet</h1>

      {/* ======== Network Switch ======== */}
      <div className="network-switch">
        <button
          className={network === "ethereum" ? "active" : ""}
          onClick={() => setNetwork("ethereum")}
        >
          Ethereum
        </button>
        <button
          className={network === "solana" ? "active" : ""}
          onClick={() => setNetwork("solana")}
        >
          Solana
        </button>
      </div>

      {/* ======== STEP 1: Seed Phrase View ======== */}
      {showSeed && active.mnemonic ? (
        <div className="seed-container">
          <h2>Your Secret Recovery Phrase</h2>
          <p className="note">
            ⚠️ Write these words down in order and store them securely.
            Never share them with anyone — losing this means losing access
            to your wallet forever.
          </p>

          {/* --- Seed phrase grid display --- */}
          <div className={`seed-grid ${!showMnemonic ? "blurred" : ""}`}>
            {active.mnemonic.split(" ").map((word, index) => (
              <div key={index} className="seed-box">
                <span className="word-index">{index + 1}.</span> {word}
              </div>
            ))}
          </div>

          <button className="toggle-seed" onClick={() => setShowMnemonic(!showMnemonic)}>
            {showMnemonic ? "🙈 Hide Seed Phrase" : "👁 Show Seed Phrase"}
          </button>

          <button className="proceed" onClick={() => setShowSeed(false)}>
            ✅ I’ve Saved My Seed Phrase
          </button>
        </div>
      ) : !active.mnemonic ? (
        // ======== STEP 0: Create Wallet ========
        <button className="create" onClick={handleCreateWallet}>
          🚀 Create New Wallet ({network})
        </button>
      ) : (
        // ======== STEP 2: Wallet Dashboard ========
        <>
          <div className="mnemonic-box">
            <strong>Seed Phrase:</strong>
            <div className={`seed-grid-inline ${!showMnemonic ? "blurred" : ""}`}>
              {active.mnemonic.split(" ").map((word, i) => (
                <div key={i} className="seed-box-mini">
                  <span>{i + 1}</span> {word}
                </div>
              ))}
            </div>
            <button
              className="small-btn"
              onClick={() => setShowMnemonic(!showMnemonic)}
            >
              {showMnemonic ? "Hide" : "Show"}
            </button>
          </div>

          <div className="controls">
            <input
              type="number"
              min="1"
              value={accountIndex}
              onChange={(e) => setAccountIndex(Number(e.target.value))}
            />
            <button onClick={() => active.addAccount(accountIndex)}>
              ➕ Add Account #{accountIndex}
            </button>
            <button className="fetch" onClick={active.fetchBalances}>
              💰 Fetch Balances
            </button>
          </div>

          <div className="accounts">
            {active.accounts.length > 0 ? (
              active.accounts.map((acc, i) => (
                <div className="card" key={i}>
                  <h3>Account {i}</h3>
                  <p>
                    <strong>Address:</strong>
                    <span className="address-text">{acc.address}</span>
                  </p>
                  <p>
                    <strong>Balance:</strong>{" "}
                    {acc.balance ? `${acc.balance}` : "Not fetched"}
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
