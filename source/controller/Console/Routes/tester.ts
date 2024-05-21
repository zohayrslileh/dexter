import Account from "@/Core/Meta/Account"
import Order from "@/Core/Meta/Order"
import sleep from "@/Tools/Sleep"

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

    const pair = pairs.find(pair => pair.symbol === "GBPUSD")

    if (!pair) throw new Error

    do {

        console.log("Get info 1")

        const info1 = await pair.info()

        console.log("Wait same time")

        await sleep(10 * 1000)

        console.log("Get info 1")

        const info2 = await pair.info()

        var order: Order | undefined

        if (info1.marketPrice > info2.marketPrice) {

            order = await pair.sell({ volume: 0.5 })
        }

        else if (info1.marketPrice < info2.marketPrice) {

            order = await pair.buy({ volume: 0.5 })
        }

        if (order) {

            console.log("Wait order time")

            // do {
            // 
            //     const positions = await account.positions()
            // 
            //     const position = positions.find(position => position.symbol === pair.symbol)
            // 
            //     if (!position) throw new Error
            // 
            //     console.log(position.profit)
            // 
            //     if (position.profit > 3 || position.profit < -1.5) break
            // 
            //     await sleep(500)
            // 
            // } while (true)
            // 
            // console.log("Close order")

            await sleep(10 * 1000)

            await order.close()

        }

    } while (true)

    console.log("The test completed successfully 🧪 ")
}