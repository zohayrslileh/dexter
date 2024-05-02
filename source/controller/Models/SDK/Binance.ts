import axios from "axios"

/*
|-----------------------------
|  Binance
|-----------------------------
|
|
*/
export default axios.create({ baseURL: "https://api.binance.com/api/v3" })