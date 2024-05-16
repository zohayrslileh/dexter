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

        await pair.candles({ interval: "4h", limit: 1 })

    }

    console.log("The test completed successfully 🧪 ")
}