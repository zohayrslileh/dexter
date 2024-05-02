import Candle, { CandlePrimitive, Interval } from "./Candle"
import Binance from "@/Models/SDK/Binance"

/*
|-----------------------------
|  Asset
|-----------------------------
| 
|
*/
export default class Asset {

    /**
     * Symbol
     * 
     */
    public readonly symbol: string

    /**
     * Base asset
     * 
     */
    public readonly baseAsset: string

    /**
     * Quote asset
     * 
     */
    public readonly quoteAsset: string

    /**
     * Order types
     * 
     */
    public readonly orderTypes: string[]

    /**
     * Constructor method
     * 
     */
    public constructor(asset: AssetPrimitive) {

        // Set symbol
        this.symbol = asset.symbol

        // Set base asset
        this.baseAsset = asset.baseAsset

        // Set quote asset
        this.quoteAsset = asset.quoteAsset

        // Set order yypes
        this.orderTypes = asset.orderTypes
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
 * Asset primitive
 * 
 */
export interface AssetPrimitive {
    symbol: string
    baseAsset: string
    quoteAsset: string
    orderTypes: string[]
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