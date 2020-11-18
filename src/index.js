let homePage = require('./homePage')

let movies = homePage.peliculas()

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

    }
}