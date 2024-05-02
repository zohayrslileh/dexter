import Market from "@/Core/Binance/Market"

/*
|-----------------------------
|  Tester 🧪
|-----------------------------
|
|
*/
export default async function () {

    const market = new Market

    const results: [string, number][] = []

    for (const asset of await market.assets()) {

        const [candle] = await asset.candles({ interval: "15m", limit: 1 })

        results.push([asset.symbol, candle.changePercent])

        console.log(asset.symbol)

    }

    console.table(results.sort((item1, item2) => item2[1] - item1[1]))

    console.log("The test completed successfully 🧪 ")
}