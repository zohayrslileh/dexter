import Candle, { CandlePrimitive, Interval } from "./Candle"
import Binance from "@/Models/SDK/Binance"

/*
|-----------------------------
|  Ticker
|-----------------------------
| 
|
*/
export default class Ticker {

    /**
     * Symbol
     * 
     */
    public readonly symbol: string

    /**
     * Bid price
     * 
     */
    public readonly bidPrice: number

    /**
     * Ask price
     * 
     */
    public readonly askPrice: number

    /**
     * Market price
     * 
     */
    public readonly marketPrice: number

    /**
     * Quote volume
     * 
     */
    public readonly quoteVolume: number

    /**
     * Price change percent
     * 
     */
    public readonly priceChangePercent: number

    /**
     * Constructor method
     * 
     */
    public constructor(ticker: TickerPrimitive) {

        // Set symbol
        this.symbol = ticker.symbol

        // Set bid price
        this.bidPrice = Number(ticker.bidPrice)

        // Set ask price
        this.askPrice = Number(ticker.askPrice)

        // Set market price
        this.marketPrice = Number(ticker.lastPrice)

        // Set quote volume
        this.quoteVolume = Number(ticker.quoteVolume)

        // Set price change percent
        this.priceChangePercent = Number(ticker.priceChangePercent)
    }

    /**
     * Get spread percent
     * 
     * @returns
     */
    public get spreadPercent() {

        return (this.askPrice - this.bidPrice) / this.bidPrice
    }

    /**
     * Candles method
     * 
     * @returns
     */
    public async candles(config: CandlesConfig): Promise<Candle[]> {

        // Ask response
        const response = await Binance({
            url: "/klines",
            params: {
                startTime: config.startTime?.getTime(),
                endTime: config.endTime?.getTime(),
                interval: config.interval,
                limit: config.limit,
                symbol: this.symbol
            }
        })

        // Initialize candles
        return response.data.map((candle: CandlePrimitive) => new Candle(candle))
    }

}

/**
 * Ticker primitive
 * 
 */
export interface TickerPrimitive {
    symbol: string
    bidPrice: string
    askPrice: string
    lastPrice: string
    quoteVolume: string
    priceChangePercent: string
}

/**
 * Candles config
 * 
 */
export interface CandlesConfig {
    interval: Interval
    startTime?: Date
    endTime?: Date
    limit?: number
}