import controller from "./controller"
import extension from "./extension"

/*
|-----------------------------
| Build All
|-----------------------------
|
|
*/
export default async function () {

    await controller()
    await extension()
}