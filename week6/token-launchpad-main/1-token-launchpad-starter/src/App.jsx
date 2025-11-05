import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchpad } from '../../2-token-launchpad-with-adapter/src/components/TokenLaunchpad';
function App() {
  

  return (
     <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/vX5IVQ9hD5nGx3mewi1RE"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                 
                    <div>

                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: 20
                    }}>
                       <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton> 
                       
                    </div>
                   <TokenLaunchpad/> 
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App