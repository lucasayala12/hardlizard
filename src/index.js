let homePage = require('./homePage')
let enCartelera = require('./enCartelera')

let movies = homePage.peliculas()
let peliculas = enCartelera.peliculas()

module.exports = {
    homePage : function(req,res){
        res.write(`${homePage.titulo} \n\n`)
        res.write(`${homePage.mensaje} \n\n`)
        res.write(`Total de películas: ${homePage.total()} \n\n`)
        movies.forEach(movie => {
            res.write(`Título: ${movie.title} \n\n`)
        });
        res.end()
    },
    enCartelera : function(req,res){
        res.write(`${enCartelera.titulo} \n\n `)
        res.write(`Total de peliculas: ${enCartelera.total()} \n\n `)
        peliculas.forEach(peliculas => {
            res.write(`Título: ${peliculas.title} \n Descripción: ${peliculas.overview} \n\n `)

        })
    },
    masVotadas : function(){

    },
    contacto : function(){

    },
    preguntasFrecuentes : function (){

    },
    sucursales : function (){

    }
}