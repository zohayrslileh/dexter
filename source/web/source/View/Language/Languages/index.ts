
/*
|-----------------------------
|  Languages
|-----------------------------
|
|
*/
const languages = [
    {
        name: "English",
        key: "en-US",
        direction: "ltr",
        dictionary: async () => await import("./en-US")
    }
]

export default languages