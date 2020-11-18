const fs = require("fs")

let enCartelera = {
	leerJSON : function () {
		return JSON.parse(fs.readFileSync("./data/movies.json","utf-8"))
	},

	total : function () {
		return this.leerJSON().total_movies
	},

	peliculas : function () {
		return this.leerJSON().movies
	},
	titulo : `
	█▀▀ █▄░█   █▀▀ ▄▀█ █▀█ ▀█▀ █▀▀ █░░ █▀▀ █▀█ ▄▀█
	██▄ █░▀█   █▄▄ █▀█ █▀▄ ░█░ ██▄ █▄▄ ██▄ █▀▄ █▀█\n\n`
} 
module.exports = enCartelera
