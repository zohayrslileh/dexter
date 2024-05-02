import Ticker, { TickerPrimitive } from "./Ticker"
import Asset, { AssetPrimitive } from "./Asset"
import Binance from "@/Models/SDK/Binance"

/*
|-----------------------------
|  Market
|-----------------------------
| 
|
*/
export default class Market {

    /**
     * Assets method
     * 
     * @returns
     */
    public async assets(): Promise<Asset[]> {

        // Ask response
        const response = await Binance.get("/exchangeInfo")

        // Initialize tickers
        return response.data.symbols.map((asset: AssetPrimitive) => new Asset(asset))
    }

    /**
     * Tickers method
     * 
     * @returns
     */
    public async tickers(): Promise<Ticker[]> {

        // Ask response
        const response = await Binance.get("/ticker/24hr")

        // Initialize tickers
        return response.data.map((ticker: TickerPrimitive) => new Ticker(ticker))
    }

}