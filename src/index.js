let homePage = require('./homePage')
let movies = homePage.peliculas()
let masVotadas = require('./masVotadas')
let votadas = masVotadas.masVotadas()
let enCartelera = require('./enCartelera')
let preguntasFrecuentes = require("./preguntasFrecuentes")
let sucursales = require("./sucursales")
let teatros = sucursales.theaters()
let peliculas = enCartelera.peliculas()
let preguntas = preguntasFrecuentes.preguntas()

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
        res.end()
    },
    masVotadas : function(req,res){
        res.write(masVotadas.titulo+'\n\n')
        res.write(`El total de peliculas es: ${masVotadas.total()}\n`)
        res.write(`El valoración general es: ${masVotadas.promedio()}\n\n`)
        votadas.forEach(peli => {
            res.write(`${peli.title}\nValoración: ${peli.vote_average}\n${peli.overview}\n\n`)
        })
        res.end()
    },
    contacto : function(){
        

    },
    preguntasFrecuentes : function (req,res){
        res.write(`${preguntasFrecuentes.titulo}\n\n`)
        res.write(`Total de preguntas: ${preguntasFrecuentes.total()}\n\n`)
        preguntas.forEach(pregunta => {
            res.write(`Pregunta: ${pregunta.faq_title}\n Respuesta: ${pregunta.faq_answer} \n\n`)
        })
        res.end()
    },
    sucursales : function (req,res){
        res.write(`${sucursales.titulo}\n\n`)
        res.write(`Contamos con ${sucursales.total()} sucursales\n\n`)
        teatros.forEach(sucursal => {
        res.write(`Sucursal: ${sucursal.name} \n Dirección: ${sucursal.addres} \n Descripción: ${sucursal.description} \n Total de salas: ${sucursal.total_rooms}\n\n`)
        })
        res.end()
    }
}