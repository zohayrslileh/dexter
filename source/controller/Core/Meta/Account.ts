import { MetatraderAccount, RpcMetaApiConnectionInstance } from "metaapi.cloud-sdk"
import Meta from "@/Models/SDK/Meta"
import Pair from "./Pair"

/*
|-----------------------------
|  Account
|-----------------------------
| 
|
*/
export default class Account {

    /**
     * Id
     * 
     */
    public readonly id: string

    /**
     * Instance
     * 
     */
    private instance: MetatraderAccount | undefined

    /**
     * Connection
     * 
     */
    private connection: RpcMetaApiConnectionInstance | undefined

    /**
     * Constructor method
     * 
     */
    public constructor(id: string) {

        // Set id
        this.id = id
    }

    /**
     * Connect method
     * 
     * @returns
     */
    public async connect() {

        // Set instance
        this.instance = await Meta.metatraderAccountApi.getAccount(this.id)

        // Wait connected
        await this.instance.waitConnected()

        // Set connection
        this.connection = this.instance.getRPCConnection()

        // Connect
        await this.connection.connect()
    }

    /**
     * Pairs method
     * 
     * @returns
     */
    public async pairs(): Promise<Pair[]> {

        // Define instance
        const instance = this.instance

        // Define connection
        const connection = this.connection

        // Check instance & connection
        if (!instance || !connection) throw new Error("Please connect account first")

        // Symbols
        const symbols = await connection.getSymbols()

        // Initialize pairs
        return symbols.map(symbol => new Pair(symbol, instance, connection))
    }

    /**
     * Positions
     * 
     * @returns
     */
    public async positions() {

        // Check instance & connection
        if (!this.connection) throw new Error("Please connect account first")

        return await this.connection.getPositions()
    }

}