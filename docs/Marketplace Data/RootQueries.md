---
title: Root Queries
description: 'Holaplex Marketplace Data'
# hide_table_of_contents: true
---

- `nft(address: PublicKey){}`

- `nfts(creators:[PublicKey,...]){}`

### Example Queries

Get all NFTs from a specifc creator (PublicKey)
> Request
```graphql
{
  nfts(creators: ["232PpcrPc6Kz7geafvbRzt5HnHP4kX88yvzUCN69WXQC"]){
    name
    address
    image
    creators {
      address
      share
    }
  }
}
```
> Response
```
{
  "data": {
    "nfts": [
      {
        "name": "Whirlpools of Honey",
        "address": "3UF9qYsW9NNkUhAKtv42RZbWDVCiPRPW1FT3LY7RgcAP",
        "image": "https://bafybeidy6ardd2pvpcg5y6boidc2hfhvasb4fhx6wrn2sc675utpky5wy4.ipfs.dweb.link?ext=png",
        "creators": [
          {
            "address": "232PpcrPc6Kz7geafvbRzt5HnHP4kX88yvzUCN69WXQC",
            "share": 100
          }
        ]
      },
      {...},
      {...},
    ]
  }
}
```


### Get details about a specific NFT
> Request
```graphql
{
  nft(address: "3UF9qYsW9NNkUhAKtv42RZbWDVCiPRPW1FT3LY7RgcAP"){
    address
    name
  }
}
```
> Response
```
{
  "data": {
    "nft": {
      "address": "3UF9qYsW9NNkUhAKtv42RZbWDVCiPRPW1FT3LY7RgcAP",
      "name": "Whirlpools of Honey"
    }
  }
}
```

As you can see with our two root queries you have the ability to quickly and effiecently find the data you're looking for. 