const fs = require("fs")
let preguntasFrecuentes = {
leerJSON : function(){
    return JSON.parse(fs.readFileSync("./data/faqs.json","utf-8"))
},
    total : function(){
        return preguntasFrecuentes.leerJSON().total_faqs
    },
    preguntas : function(){
        return preguntasFrecuentes.leerJSON().faqs
    },
    titulo : `
    █▀█ █▀█ █▀▀ █▀▀ █░█ █▄░█ ▀█▀ ▄▀█ █▀   █▀▀ █▀█ █▀▀ █▀▀ █░█ █▀▀ █▄░█ ▀█▀ █▀▀ █▀
    █▀▀ █▀▄ ██▄ █▄█ █▄█ █░▀█ ░█░ █▀█ ▄█   █▀░ █▀▄ ██▄ █▄▄ █▄█ ██▄ █░▀█ ░█░ ██▄ ▄█\n\n`,
}

module.exports = preguntasFrecuentes



