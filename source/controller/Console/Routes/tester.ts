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

    const pair = pairs.find(pair => pair.symbol === "BTCUSD")

    if (!pair) throw new Error("Pair was not found")

    const info = await pair.info()

    const sizeStopLoss = info.marketPrice * 0.0017

    const sizeTakeProfit = info.marketPrice * 0.002

    const buyStopLoss = info.marketPrice - sizeStopLoss

    const buyTakeProfit = info.marketPrice + sizeTakeProfit

    const sellStopLoss = info.marketPrice + sizeStopLoss

    const sellTakeProfit = info.marketPrice - sizeTakeProfit

    const volume = 0.1

    const buyOrder = await pair.buy({ volume, stopLoss: buyStopLoss, takeProfit: buyTakeProfit })

    const sellOrder = await pair.sell({ volume, stopLoss: sellStopLoss, takeProfit: sellTakeProfit })

    console.log("BUY: ", buyOrder.id)

    console.log("SELL: ", sellOrder.id)

    console.log("The test completed successfully 🧪 ")
}