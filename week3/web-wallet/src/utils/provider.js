import { ethers } from "ethers";

export function makeProvider(network = "mainnet") {
  const url = import.meta.env.VITE_ALCHEMY_ETH_URL;
  return new ethers.providers.JsonRpcProvider(url, network);
}

export async function getEthBalance(address, provider) {
  const balanceBigInt = await provider.getBalance(address);
  return ethers.utils.formatEther(balanceBigInt);
}
