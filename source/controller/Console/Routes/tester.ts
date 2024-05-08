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

        const [candle1, candle2] = await pair.candles({ interval: "15m", limit: 2 })

        console.log(pair.symbol, candle1.bodyPercent > 0 && candle2.bodyPercent > 0)

    }

    console.log("The test completed successfully 🧪 ")
}