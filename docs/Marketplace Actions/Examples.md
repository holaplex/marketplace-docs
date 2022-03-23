---
title: Examples
description: 'Holaplex Marketplace Data'
# hide_table_of_contents: true
---

# Examples

Solana provides a javascript web3 library for data queries and sending transactions. [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) In conjunction with the solana library we’ll use the Auction House package.

Sell NFT example
```TypeScript
# Create Sell Instruction
const sellInstruction = createSellInstruction(sellInstructionAccounts,sellInstructionArgs)

# Create Receipt Instruction
const printListingReceiptInstruction = createPrintListingReceiptInstruction(listingReceiptInstructionAccounts, listingReceiptInstructionArgs)

# Create Transaction Object
const tx = new Transaction()

# Add instructions to Transaction
tx.add(sellInstruction).add(printListingReceiptInstruction)

# Get recent blockhash
tx.recentBlockhash = (await connection.getRecentBlockhash()).blockhash

# Set transaction fee payer
tx.feePayer = publicKey

# Sign tranaction
signed = await signTransaction(tx);

# Send tranaction and get its ID
signature = await connection.sendRawTransaction(signed.serialize());

# Wait for tranaction to be confirmed
await connection.confirmTransaction(signature, 'confirmed');
```