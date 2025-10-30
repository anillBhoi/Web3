import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";  // ✅ fix
window.Buffer = Buffer;           // ✅ make it global

import "./index.css";
import App from "./App.jsx";
import { WalletProvider } from "./context/WalletContext.jsx";
import { SolanaProvider } from "./context/SolanaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WalletProvider>
      <SolanaProvider>
        <App />
      </SolanaProvider>
    </WalletProvider>
  </StrictMode>
);
