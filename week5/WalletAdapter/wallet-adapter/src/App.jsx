import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Airdrop } from './Airdrop';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
function App() {
  

  return (
     <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/vX5IVQ9hD5nGx3mewi1RE"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                     <div>
                      <p>Hi there</p>
                     </div>
                     <Airdrop></Airdrop> 
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
