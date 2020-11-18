const fs = require("fs")
let sucursales = {
    leerJSON : function(){
        return JSON.parse(fs.readFileSync("./data/theaters.json", "utf-8"))
    },
    total : function(){
        return this.leerJSON().total_theaters
    },
    theaters : function(){
        return this.leerJSON().theaters
    },
    titulo : `
    █▀ █░█ █▀▀ █░█ █▀█ █▀ ▄▀█ █░░ █▀▀ █▀
    ▄█ █▄█ █▄▄ █▄█ █▀▄ ▄█ █▀█ █▄▄ ██▄ ▄█`
}

module.exports = sucursales