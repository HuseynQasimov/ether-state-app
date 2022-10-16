import fs from "fs";
import moment from "moment";
import config from "config";

import GetBalance from "./GetBalanceInfo";

export const BalanceSchedule = function () {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            setInterval(async () => {
                const balance = await GetBalance();
                const time = moment().format("YYYY-MM-DD HH:mm:ss");

                fs.writeFileSync(config.get("file"), JSON.stringify({ balance, time }));
            }, 60000);
        }
    };
};
