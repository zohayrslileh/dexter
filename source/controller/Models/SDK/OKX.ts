import crypto from "crypto"
import axios from "axios"

/**
 * OKX method
 * 
 * @returns
 */
export default async function <Body>(config: Config) {

    // Current date
    const currentDate = new Date

    // Request
    const request = `${currentDate.toISOString()}${config.method}${config.path}${config.data ? JSON.stringify(config.data) : ""}`

    // Signature
    const signature = crypto.createHmac("sha256", process.env.OK_SECRET_KEY || "").update(request).digest().toString("base64")

    // Ask response
    const response = await axios<{ data: Body }>({
        method: config.method,
        url: "https://www.okx.com" + config.path,
        headers: {
            "OK-ACCESS-KEY": process.env.OK_ACCESS_KEY,
            "OK-ACCESS-PASSPHRASE": process.env.OK_ACCESS_PASSPHRASE,
            "OK-ACCESS-TIMESTAMP": currentDate.toISOString(),
            "OK-ACCESS-SIGN": signature,
            "x-simulated-trading": "1"
        },
        data: config.data
    })

    return response.data
}

/**
 * Config
 * 
 */
interface Config {
    method: "GET" | "POST"
    path: string
    data: unknown
}