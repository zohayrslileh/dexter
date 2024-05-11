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

    const symbols: { name: string, change: number }[] = []

    for (const pair of pairs) {

        const [candle] = await pair.candles({ interval: "4h", limit: 1 })

        const symbol: { name: string, change: number } = { name: pair.symbol, change: candle.changePercent }

        symbols.push(symbol)

        console.log(symbol.name, (symbol.change * 100).toFixed(2) + "%")

    }

    console.log(symbols.sort((symbol1, symbol2) => symbol2.change - symbol1.change))

    console.log("The test completed successfully 🧪 ")
}