const fs = require('fs')

module.exports = {
    leerJSON : function(){
        return JSON.parse(fs.readFileSync('./data/movies.json','utf-8'))
    },
    total : function(){
        return this.leerJSON().total_movies
    },
    titulo : `
    █ █▄░█ █ █▀▀ █ █▀█
    █ █░▀█ █ █▄▄ █ █▄█\n\n`, 
    peliculas : function(){
        return this.leerJSON().movies.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0)
    },
    mensaje : `​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
    películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.
    \n\n`
}
