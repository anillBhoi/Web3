import {ethers} from "ethers";

export async function getBalance(address) {
    try {
        const provider = new ethers.providers.JsonRpcProvider(import.meta.VITE_AlCHEMY_URL);

        // fetch raw balance in wei
        const balance = await provider.getBalance(address);


        // convert wei -> Eth
        return ethers.utils.formatEther(balance);

    } catch(err) {
        console.error("Error fetching balance: ", err);
        return "Error";
    }
}

