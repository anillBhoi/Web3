


import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privateKey = ed.utils.randomPrivateKey();

  // Convert the message "hello world" to Uint8Array
  const message = new TextEncoder().encode("hello world");

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privateKey);

  // Sign the message
  const signature = await ed.signAsync(message, privateKey);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log(isValid); // should print true if the signature is valid
}

main();
