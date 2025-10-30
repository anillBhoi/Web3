import { ethers } from "ethers";

// Generate a random mnemonic phrase (BIP39)
export async function createMnemonic() {
  const wallet = ethers.Wallet.createRandom();
  return wallet.mnemonic.phrase;
}

// Create HD root node from mnemonic
export function mnemonicToHDNode(mnemonic) {
  return ethers.HDNodeWallet.fromPhrase(mnemonic);
}

// Derive account at a given index using BIP44 path
export function deriveAccount(mnemonic, index = 0) {
  // Base derivation path for Ethereum
  const path = `m/44'/60'/0'/0/${index}`;

  // Create a root node manually from the mnemonic
  const root = ethers.HDNodeWallet.fromSeed(
    ethers.Mnemonic.fromPhrase(mnemonic).computeSeed()
  );

  // Derive the wallet at the specified path
  const wallet = root.derivePath(path);

  return {
    index,
    address: wallet.address,
    privateKey: wallet.privateKey,
    publicKey: wallet.publicKey,
    path,
  };
}
