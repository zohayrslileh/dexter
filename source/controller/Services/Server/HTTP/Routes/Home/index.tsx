import Authentication from "@/Core/Authentication"
import { Context } from "hono"

/*
|-----------------------------
|  Home
|-----------------------------
|
|
*/
export default async function (context: Context<Environment>) {

    await context.var.authentication.login({ username: "admin", password: "admin123" })

    const user = await context.var.authentication.verify()

    return context.html(<h1>Hello World! {user.username}</h1>)

}

/**
 * Environment
 * 
 */
interface Environment {

    // Variables
    Variables: {
        authentication: Authentication
    }
}