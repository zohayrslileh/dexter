import axios from "axios"

/*
|-----------------------------
|  Mexc
|-----------------------------
|
|
*/
export default axios.create({ baseURL: "https://api.mexc.com/api/v3" })