let homePage = require('./homePage')
let movies = homePage.peliculas()
module.exports = {
    masVotadas : function(){
        return movies.filter(function(peliculas){
            return peliculas.vote_average >= 7
        })
    },
    total : function(){
        return this.masVotadas().length
    },
    promedio : function(){
        let rating = this.masVotadas().map(function(peliculas){
            return peliculas.vote_average
        })
        let ratingTotal = rating.reduce(function(acum,num){
            return acum + num
        })
        return (ratingTotal/rating.length).toFixed(2)
    },
    titulo : `
    █▀▄▀█ ▄▀█ █▀   █░█ █▀█ ▀█▀ ▄▀█ █▀▄ ▄▀█ █▀
    █░▀░█ █▀█ ▄█   ▀▄▀ █▄█ ░█░ █▀█ █▄▀ █▀█ ▄█`
}