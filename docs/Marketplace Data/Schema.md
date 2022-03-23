---
id: schema
title: GraphQL Schema
description: 'Holaplex Marketplace Data'
sidebar_position: 2
# hide_table_of_contents: true
---

### Nft Schema
```graphql
type Nft {
  address: String!
  name: String!
  sellerFeeBasisPoints: Int!
  mintAddress: String!
  primarySaleHappened: Boolean!
  description: String!
  image: String!
  creators: [NftCreator!]!
  attributes: [NftAttribute!]!
  listings: [ListingReceipt!]!
  offers: [BidReceipt!]!
}
```

### NftCreator Schema
```graphql
type NftCreator {
  address: String!
  metadataAddress: String!
  share: Int!
  verified: Boolean!
}
```

### NftAttribute Schema
```graphql
type NftAttribute {
  metadataAddress: String!
  value: String!
  traitType: String!
}
```

### ListingReceipt Schema
```
type ListingReceipt {
  address: String!
  tradeState: String!
  seller: String!
  metadata: String!
  auctionHouse: String!
  price: Lamports!
  tradeStateBump: Int!
  createdAt: DateTimeUtc!
  canceledAt: DateTimeUtc
  bookkeeper: String!
  purchaseReceipt: String
  tokenSize: Int!
  bump: Int!
}
```
### BidReceipt Schema
```
type BidReceipt {
  address: String!
  tradeState: String!
  buyer: String!
  metadata: String!
  auctionHouse: String!
  price: Lamports!
  tradeStateBump: Int!
  tokenAccount: String
  createdAt: DateTimeUtc!
  canceledAt: DateTimeUtc
}
```
