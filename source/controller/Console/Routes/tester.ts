import OKX from "@/Models/SDK/OKX"

/*
|-----------------------------
|  Tester 🧪
|-----------------------------
|
|
*/
export default async function () {

    const buy = OKX({
        method: "POST",
        path: "/api/v5/trade/order",
        data: {
            "instId": "PEPE-USDT-SWAP",
            "tdMode": "isolated",
            "_feReq": true,
            "side": "buy",
            "sz": "54.7",
            "posSide": "long",
            "ordType": "market",
            "_feBbo": false
        }
    })

    const sell = OKX({
        method: "POST",
        path: "/api/v5/trade/order",
        data: {
            "instId": "PEPE-USDT-SWAP",
            "tdMode": "isolated",
            "_feReq": true,
            "side": "sell",
            "sz": "54.7",
            "posSide": "short",
            "ordType": "market",
            "_feBbo": false
        }
    })

    console.log(await Promise.all([buy, sell]))

    console.log("The test completed successfully 🧪 ")
}