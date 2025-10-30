import React, { createContext, useState } from "react";
import * as bip39 from "bip39";
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const SolanaContext = createContext();

export const SolanaProvider = ({ children }) => {
  const [mnemonic, setMnemonic] = useState("");
  const [accounts, setAccounts] = useState([]);

  const SOLANA_RPC = import.meta.env.VITE_ALCHEMY_SOL_URL;

  // ✅ Create new Solana wallet
  const createNewWallet = async () => {
    const newMnemonic = bip39.generateMnemonic();
    setMnemonic(newMnemonic);
    setAccounts([]);
  };

  // ✅ Add new Solana account
  const addAccount = async () => {
    if (!mnemonic) return alert("Please create a wallet first!");

    const seed = await bip39.mnemonicToSeed(mnemonic);
    const keypair = Keypair.fromSeed(seed.slice(0, 32)); // simplified deterministic seed

    const newAccount = {
      address: keypair.publicKey.toBase58(),
      privateKey: keypair.secretKey,
      balance: null,
    };

    setAccounts((prev) => [...prev, newAccount]);
  };

  // ✅ Fetch balances from Solana Mainnet
  const fetchBalances = async () => {
    const connection = new Connection(SOLANA_RPC, "confirmed");
    const updated = [];

    for (let acc of accounts) {
      const keypair = Keypair.fromSecretKey(acc.privateKey);
      const balance = await connection.getBalance(keypair.publicKey);
      updated.push({
        ...acc,
        balance: (balance / LAMPORTS_PER_SOL).toFixed(4),
      });
    }

    setAccounts(updated);
  };

  return (
    <SolanaContext.Provider
      value={{
        mnemonic,
        accounts,
        createNewWallet,
        addAccount,
        fetchBalances,
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};
