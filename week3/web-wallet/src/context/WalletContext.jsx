import React, { createContext, useState } from "react";
import { createMnemonic, deriveAccount } from "../utils/walletUtils";
import { getBalance } from "../utils/balanceUtils";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [mnemonic, setMnemonic] = useState("");
  const [accounts, setAccounts] = useState([]); // ✅ renamed from account → accounts for consistency

  // ✅ Create a brand new wallet (mnemonic + first account)
  const createNewWallet = async () => {
    try {
      const newMnemonic = await createMnemonic();
      setMnemonic(newMnemonic);
      const firstAccount = deriveAccount(newMnemonic, 0);
      setAccounts([firstAccount]);
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
  };

  // ✅ Add a new derived account by index
  const addAccount = (index) => {
    try {
      if (!mnemonic) return;
      const newAccount = deriveAccount(mnemonic, index);
      setAccounts((prev) => [...prev, newAccount]);
    } catch (error) {
      console.error("Error adding account:", error);
    }
  };

  // ✅ Fetch and update all balances
  const fetchBalances = async () => {
    try {
      const updated = await Promise.all(
        accounts.map(async (acc) => ({
          ...acc,
          balance: await getBalance(acc.address),
        }))
      );
      setAccounts(updated);
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        mnemonic,
        accounts, // ✅ renamed to match App.jsx
        createNewWallet,
        addAccount,
        fetchBalances,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
