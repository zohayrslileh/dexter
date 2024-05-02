import { MetatraderAccount, RpcMetaApiConnectionInstance } from "metaapi.cloud-sdk"
import Candle, { Interval } from "./Candle"
import Order from "./Order"

/*
|-----------------------------
|  Pair
|-----------------------------
| 
|
*/
export default class Pair {

    /**
     * Symbol
     * 
     */
    public readonly symbol: string

    /**
     * Instance
     * 
     */
    private readonly instance: MetatraderAccount

    /**
     * Connection
     * 
     */
    private readonly connection: RpcMetaApiConnectionInstance

    /**
     * Constructor method
     * 
     */
    public constructor(symbol: string, instance: MetatraderAccount, connection: RpcMetaApiConnectionInstance) {

        // Set symbol
        this.symbol = symbol

        // Set instance
        this.instance = instance

        // Set connection
        this.connection = connection
    }

    /**
     * Info method
     * 
     * @returns
     */
    public async info() {

        // Tick
        const tick = await this.connection.getTick(this.symbol)

        // Buy price
        const buyPrice = tick.ask || 0

        // Sell price
        const sellPrice = tick.bid || 0

        // Market price
        const marketPrice = sellPrice + ((buyPrice - sellPrice) / 2)

        return { buyPrice, sellPrice, marketPrice }
    }

    /**
     * Candles method
     * 
     * @returns
     */
    public async candles(config: CandlesConfig): Promise<Candle[]> {

        // Candles
        const candles = await this.instance.getHistoricalCandles(this.symbol, config.interval, config.startTime, config.limit)

        // Initialize candles
        return candles.map(candle => new Candle(candle))
    }

    /**
     * Buy method
     * 
     * @returns
     */
    public async buy(config: OrderConfig) {

        // Create order
        const order = await this.connection.createMarketBuyOrder(this.symbol, config.volume, config.stopLoss, config.takeProfit)

        // Initialize order
        return new Order(order, this.connection)
    }

    /**
     * Sell method
     * 
     * @returns
     */
    public async sell(config: OrderConfig) {

        // Create order
        const order = await this.connection.createMarketSellOrder(this.symbol, config.volume, config.stopLoss, config.takeProfit)

        // Initialize order
        return new Order(order, this.connection)
    }

}

/**
 * Candles config
 * 
 */
export interface CandlesConfig {
    interval: Interval
    startTime?: Date
    limit?: number
}

/**
 * Order config
 * 
 */
export interface OrderConfig {
    volume: number
    takeProfit: number
    stopLoss: number
}