import ExceptionHandler from "./Exception"
import Router from "@/Tools/HTTP/Router"
import Routes from "./Routes"

/*
|-----------------------------
|  Rest Api
|-----------------------------
|
|
*/
export default Router.create(function (restApi) {

    /*
    |-----------------------------
    |  Exception Handler
    |-----------------------------
    |
    |
    */
    restApi.onError(ExceptionHandler)

    /*
    |-----------------------------
    |  Routes
    |-----------------------------
    |
    |
    */
    restApi.route("/", Routes)

})