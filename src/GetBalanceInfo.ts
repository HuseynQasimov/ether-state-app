import Web3 from "web3";
import { Request } from "express";
import config from "config";

const url: string = config.get("url");

export default async function GetBalance(req?: Request) {
    try {
        const address: string = req?.params.address
            ? req.params.address
            : config.get("defaultWallet");

        const web3 = new Web3(url);
        const balance = await web3.eth.getBalance(address);

        const balanceH = web3.utils.fromWei(balance, "ether");

        return balanceH;
    } catch (error: any) {
        console.log(error);

        return error.message;
    }
}
