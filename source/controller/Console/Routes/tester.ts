// import calculateSMA from "@/Core/Indicator/SMA"
import calculateRSI from "@/Core/Indicator/RSI"
import Account from "@/Core/Meta/Account"

/*
|-----------------------------
|  Tester 🧪
|-----------------------------
|
|
*/
export default async function () {

    const account = new Account("d212b44f-b07a-4bc6-bd49-5be4834f1a15")

    await account.connect()

    const pairs = await account.pairs()

    for (const pair of pairs.filter(pair => !pair.symbol.includes("_"))) {

        try {

            const candles_4h = await pair.candles({ interval: "4h", limit: 14 })

            const candles_15m = await pair.candles({ interval: "15m", limit: 14 })

            const [rsi_4h] = calculateRSI(candles_4h.map(candle => candle.closePrice))

            const [rsi_15m] = calculateRSI(candles_15m.map(candle => candle.closePrice))

            if (rsi_4h > 71 && rsi_15m > 71) {

                const order = await pair.sell({ volume: 0.1 })

                console.log(`OPERATION: SELL | ORDER_ID: ${order.id} | PAIR: ${pair.symbol}`)

            }

            else if (rsi_4h < 29 && rsi_15m < 29) {

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