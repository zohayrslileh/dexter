import Account from "@/Core/Meta/Account"
import Candle from "@/Core/Meta/Candle"

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

    const items: Item[] = []

    for (const pair of pairs) {

        const candles = await pair.candles({ interval: "4h", limit: 100 })

        const buttom = Candle.buttom(candles)

        const price = candles[candles.length - 1].closePrice

        const item: Item = { name: pair.symbol, sort: (price - buttom) / buttom }

        items.push(item)

        console.log(item.name, item.sort)

    }

    console.table(items.sort((item1, item2) => item2.sort - item1.sort))

    console.log("The test completed successfully 🧪 ")
}

interface Item {
    name: string
    sort: number
}