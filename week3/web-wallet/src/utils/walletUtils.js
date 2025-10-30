import {ethers} from "ethers";
import bip39 from "bip39";

export async function createMnemonic(){
    return bip39.generateMnemonic();  // it generates 12 words by default 
}

export async function mnemonicToHDNode(mnemonic) {
    return ethers.utils.HDNode.fromMnemonic(mnemonic);
}


// Derive Account by index with standard ETH path
export function deriveAccount(mnemonic, index=0){
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
    const path = `m/44'/60'/0'/0/${index}`;
    const child = hdNode.derivePath(path);

    return{
        index, 
        address:child.address,
        privateKey:child.privateKey, 
        publicKey:child.publicKey,
        path,
    };
}