import calculateRSI from "@/Core/Indicator/RSI"
import calculateSMA from "@/Core/Indicator/SMA"
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

    for (const pair of pairs.filter(pair => !pair.symbol.includes("_"))) {

        try {

            const candles = await pair.candles({ interval: "15m", limit: 100 })

            const lastCandle = candles[candles.length - 1]

            const [rsi] = calculateRSI(candles.map(candle => candle.closePrice)).reverse()

            const [sma100] = calculateSMA(candles.map(candle => candle.closePrice), 100).reverse()

            if (rsi > 75 && lastCandle.closePrice < sma100) {

                const order = await pair.sell({ volume: 0.1 })

                console.log(`OPERATION: SELL | ORDER_ID: ${order.id} | PAIR: ${pair.symbol}`)

            }

            else if (rsi < 25 && lastCandle.closePrice > sma100) {

                const order = await pair.buy({ volume: 0.1 })

                console.log(`OPERATION: BUY | ORDER_ID: ${order.id} | PAIR: ${pair.symbol}`)

            }

            else console.log(`OPERATION: NON | PAIR: ${pair.symbol}`)

        } catch {

            console.log("ERROR TO DO THIS OPIRATION")

        }

    }

    console.log("The test completed successfully 🧪 ")
}