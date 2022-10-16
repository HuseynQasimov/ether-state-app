# ether-state-app
This app writes state of a given ethereum token to file at every 60 second. Besides, you can get current state of token with GET endpoint. 

How to run app:

1. Fetch project and run `npm install` command.
2. Run `tsc` command at root folder in order to convert typescript code to javascript.
3. You should set up config file with your mainnet url, wallet and full path of file with json extension that scheduled report should be written.
4. Now just run `npm run start` and app should fetch and write a wallet information to the given path at every 60 second.

Example of config file:
{
"port": 5000,
"url": "https://mainnet.infura.io/v3/07f88a2d548c42b9861a3b31b4c57ba0",
"defaultWallet": "0xA145ac099E3d2e9781C9c848249E2e6b256b030D",
"file": "D:\\EtheriumAPI\\BalanceOfToken.json"
}

API:
host:port/api/get-balance/:address

example: localhost:5000/api/get-balance/0xA145ac099E3d2e9781C9c848249E2e6b256b030D

