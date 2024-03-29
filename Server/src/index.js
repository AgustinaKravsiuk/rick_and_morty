const http = require("http");
const getCharById = require("./controllers/getCharById")

const PORT = 3001;

module.export =
http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    // if(url.includes("/rickandmorty/character")) {
    //     const id = Number(url.split("/").at(-1));
    //     const character = data.find((char) => char.id === id);
    //     if(character) {
    //         res.writeHead(200, {"Content-Type" : "application/json"})
    //         return res.end(JSON.stringify(character));
    //     } else {
    //         res.writeHead(404, {"Content-Type": "application/json"})
    //         res.end(JSON.stringify({error: "Character not found"}))
    //     }
    // }
    if(url.includes("/rickandmorty/character")){
        const urlId = Number(url.split("/").at(-1))
        getCharById(res, urlId);
    }
})
.listen(PORT, "localhost");

