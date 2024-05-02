import Asset, { AssetPrimitive } from "./Asset"
import Mexc from "@/Models/SDK/Mexc"

/*
|-----------------------------
|  Market
|-----------------------------
| 
|
*/
export default class Market {

    /**
     * Period
     * 
     */
    public readonly period: Period

    /**
     * Constructor method
     * 
     */
    public constructor(period: Period) {

        // Set period
        this.period = period
    }

    /**
     * Assets method
     * 
     * @returns
     */
    public async assets(): Promise<Asset[]> {

        // Ask response
        const response = await Mexc.get("/ticker/" + this.period)

        // Initialize assets
        return response.data.map((asset: AssetPrimitive) => new Asset(asset))
    }

}

/**
 * Period
 * 
 */
export type Period = "24hr"