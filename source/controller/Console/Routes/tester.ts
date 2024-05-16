import Account from "@/Core/Meta/Account"
import calculateRSI from "@/Core/Meta/RSI"

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

    const pair = pairs.find(pair => pair.symbol === "GBPUSD")

    if (!pair) throw new Error("Pair was not found")

    const candles = await pair.candles({ interval: "4h", limit: 14 })

    const rsi = calculateRSI(candles.map(candle => candle.closePrice))

    console.log(rsi)

    console.log("The test completed successfully 🧪 ")
}