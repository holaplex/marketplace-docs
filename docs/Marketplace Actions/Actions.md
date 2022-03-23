---
title: Actions
description: 'Holaplex Marketplace Data'
# hide_table_of_contents: true
---

# Actions

The Auction House Program enables us to perform the following types of actions 

* **Sell NFT** - Sell a NFT you own - [instructions/sell.ts](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/sell.ts)

* **Buy NFT** -  Purchase a NFT currently listed for sale -  [instructions/buy.ts](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/buy.ts)


* **Make Offer** - Make an offer on a NFT, listed for sale or not -  [instructions/buy.ts](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/buy.ts) & [instructions/printBidReceipt.ts](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/printBidReceipt.ts)

* **Accept Offer** - Accept a buy offer on a NFT you own - [createSellInstruction](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/sell.ts) & [createPrintListingReceiptInstruction](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/printListingReceipt.ts) &  [executePrintPurchaseReceiptInstruction](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/printPurchaseReceipt.ts)

* **Cancel Listing** - [instructions/cancel.ts](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/cancel.ts) & cancelListingReceiptInstruction

* **Cancel Offer** - [instructions/cancel.ts](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction-house/js/src/generated/instructions/cancel.ts)
