import Authentication from "@/Core/Authentication"
import { MiddlewareHandler } from "hono"

/*
|-----------------------------
|  Initialize Middleware
|-----------------------------
|
|
*/
const initialize: MiddlewareHandler = async (context, next) => {

    // Set Headers
    context.header("X-Powered-By", "Xaelion")
    context.header("Access-Control-Allow-Origin", "*")
    context.header("Access-Control-Allow-Headers", "*")

    // Set Authentication
    context.set("authentication", new Authentication(context.req.header("Authorization")))

    return await next()
}

export default initialize