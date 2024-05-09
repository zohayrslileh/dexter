import { MetatraderCandle } from "metaapi.cloud-sdk"

/*
|-----------------------------
|  Candle
|-----------------------------
| 
|
*/
export default class Candle {

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
     * Constructor method
     * 
     */
    public constructor(candle: MetatraderCandle) {

        // Set open price
        this.openPrice = candle.open

        // Set high price
        this.highPrice = candle.high

        // Set low price
        this.lowPrice = candle.low

        // Set close price
        this.closePrice = candle.close
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

        return bodyHeight / (this.highPrice - this.lowPrice)
    }

    /**
     * Top tail percent
     * 
     * @returns
     */
    public get topTailPercent() {

        // Tail height
        const tailHeight = this.highPrice - Math.max(this.openPrice, this.closePrice)

        return tailHeight / (this.highPrice - this.lowPrice)
    }

    /**
     * Buttom tail percent
     * 
     * @returns
     */
    public get buttomTailPercent() {

        // Tail height
        const tailHeight = Math.min(this.openPrice, this.closePrice) - this.lowPrice

        return tailHeight / (this.highPrice - this.lowPrice)
    }

}

/**
 * Interval
 * 
 */
export type Interval = "1m" | "5m" | "15m" | "30m" | "60m" | "4h" | "1d" | "1W" | "1M"