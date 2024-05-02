import MetaApi from "metaapi.cloud-sdk"

/*
|-----------------------------
|  Check TOKEN
|-----------------------------
|
|
*/
if (!process.env.META_TOKEN) throw Error

/*
|-----------------------------
|  Meta
|-----------------------------
|
|
*/
export default new MetaApi(process.env.META_TOKEN)