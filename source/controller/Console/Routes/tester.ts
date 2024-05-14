import Account from "@/Core/Meta/Account"

/*
|-----------------------------
|  Tester 🧪
|-----------------------------
|
|
*/
export default async function () {

    const account = new Account("a1109461-09ce-4364-bf01-31a280539fb7")

    await account.connect()

    const pairs = await account.pairs()

    for (const pair of pairs) {

        const [candle2_4h, candle1_4h] = await pair.candles({ interval: "4h", limit: 2 })

        const [candle2_15m, candle1_15m] = await pair.candles({ interval: "15m", limit: 2 })

        const condition_up = true
            && candle2_4h.body > 0 && candle1_4h.body > 0
            && candle2_15m.body > 0 && candle1_15m.body > 0
            && candle2_4h.bodyPercent > 0.5 && candle1_4h.bodyPercent > 0.5
            && candle2_15m.bodyPercent > 0.5 && candle1_15m.bodyPercent > 0.5

        const condition_down = true
            && candle2_4h.body < 0 && candle1_4h.body < 0
            && candle2_15m.body < 0 && candle1_15m.body < 0
            && candle2_4h.bodyPercent > 0.5 && candle1_4h.bodyPercent > 0.5
            && candle2_15m.bodyPercent > 0.5 && candle1_15m.bodyPercent > 0.5

        const condition = condition_up || condition_down

        if (condition) console.log(pair.symbol)

    }

    console.log("The test completed successfully 🧪 ")
}