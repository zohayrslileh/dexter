import { MetatraderTradeResponse, RpcMetaApiConnectionInstance } from "metaapi.cloud-sdk"

/*
|-----------------------------
|  Order
|-----------------------------
| 
|
*/
export default class Order {

    /**
     * Id
     * 
     */
    public readonly id: string

    /**
     * Connection
     * 
     */
    private readonly connection: RpcMetaApiConnectionInstance

    /**
     * Constructor method
     * 
     */
    public constructor(order: MetatraderTradeResponse, connection: RpcMetaApiConnectionInstance) {

        // Set id
        this.id = order.orderId

        // Set connection
        this.connection = connection
    }

    /**
     * Close method
     * 
     * @returns
     */
    public async close() {

        return await this.connection.closePosition(this.id, {})
    }

}