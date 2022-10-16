import express from "express";
import GetBalance from "./GetBalanceInfo";
import config from "config";
import { BalanceSchedule } from "./BalanceScheduler";

const port = config.get("port");

const app = express();

app.get("/api/get-balance/:address", async (req, res) => {
    res.send(await GetBalance(req));
});

app.listen(port, () => {
    BalanceSchedule()();
    console.log(`Running on port ${port}..`);
});
