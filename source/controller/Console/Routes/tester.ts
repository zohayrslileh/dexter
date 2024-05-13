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

    const items: Item[] = []

    for (const pair of pairs) {

        const [candle2, candle1] = await pair.candles({ interval: "4h", limit: 2 })

        const condition = candle2.body > candle1.body * 1.1 && candle2.bodyPercent > 0.5

        if (condition) console.log(pair.symbol)

    }

    console.table(items.sort((item1, item2) => item2.sort - item1.sort))

    console.log("The test completed successfully 🧪 ")
}

interface Item {
    name: string
    sort: number
}