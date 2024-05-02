
/*
|-----------------------------
|  Candle
|-----------------------------
| 
|
*/
export default class Candle {

    /**
     * Open time
     * 
     */
    public readonly openTime: Date

    /**
     * Close time
     * 
     */
    public readonly closeTime: Date

    /**
     * Open price
     * 
     */
    public readonly openPrice: number

    /**
     * Close price
     * 
     */
    public readonly closePrice: number

    /**
     * High price
     * 
     */
    public readonly highPrice: number

    /**
     * Low price
     * 
     */
    public readonly lowPrice: number

    /**
     * Volume
     * 
     */
    public readonly volume: number

    /**
     * Quote volume
     * 
     */
    public readonly quoteVolume: number

    /**
     * Constructor method
     * 
     */
    public constructor(candle: CandlePrimitive) {

        // Set open time
        this.openTime = new Date(candle[0])

        // Set open price
        this.openPrice = Number(candle[1])

        // Set high price
        this.highPrice = Number(candle[2])

        // Set low price
        this.lowPrice = Number(candle[3])

        // Set close price
        this.closePrice = Number(candle[4])

        // Set volume
        this.volume = Number(candle[5])

        // Set close time
        this.closeTime = new Date(candle[6])

        // Set quote volume
        this.quoteVolume = Number(candle[7])
    }

    /**
     * Get change percent
     * 
     * @returns
     */
    public get changePercent() {

        return (this.closePrice - this.openPrice) / this.openPrice
    }

    /**
     * Get body percent
     * 
     * @returns
     */
    public get bodyPercent() {

        // Body height
        const bodyHeight = Math.abs(this.closePrice - this.openPrice)

        // Height
        const height = Math.abs(this.highPrice - this.lowPrice)

        return bodyHeight / height
    }

}

/**
 * Candle primitive
 * 
 */
export type CandlePrimitive = [number, string, string, string, string, string, number, string]

/**
 * Interval
 * 
 */
export type Interval = "1m" | "5m" | "15m" | "30m" | "60m" | "4h" | "1d" | "1W" | "1M"