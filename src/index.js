let homePage = require('./homePage')
let movies = homePage.peliculas()
let masVotadas = require('./masVotadas')
let votadas = masVotadas.masVotadas()

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

    },
    masVotadas : function(req,res){
        res.write(masVotadas.titulo+'\n\n')
        res.write(`El total de peliculas es: ${masVotadas.total()}\n`)
        res.write(`El valoración general es: ${masVotadas.promedio()}\n\n`)
        votadas.forEach(peli => {
            res.write(`-${peli.title}\nValoración: ${peli.vote_average}\n${peli.overview}\n\n`)
        })
        res.end()
    },
    contacto : function(){

    },
    preguntasFrecuentes : function (){

    },
    sucursales : function (){

    }
}