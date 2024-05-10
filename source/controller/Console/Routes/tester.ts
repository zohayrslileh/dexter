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

        const [_, candle] = await pair.candles({ interval: "4h", limit: 2 })

        const condition = candle.topTailPercent > 0.75 || candle.buttomTailPercent > 0.75

        if (condition) console.log(pair.symbol)

    }

    console.log("The test completed successfully 🧪 ")
}