
const movies = require("../models/filmes.json")

const home = (request, response) =>{
    response.status(200).send("ola meninas reprograma")
}

const getAll = (request, response) =>{
    response.status(200).send(movies)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const idFiltratdo = movies.find(movie => movie.id == idRequerido)
    
    response.status(200).send(idFiltratdo)
}

const getByTitle = (request, response) => {
    const requestedTitle = request.query.title.toLowerCase()
    const filteredTitle = movies.find( movie => movie.title. title.toLowerCase() .includes(requestedTitle))
    

    if (filteredTitle === ""|| filteredTitle === undefined) {
        response.status(404).send("Por favor insira um titulo valido")
    
    }
    else{
        response.status(200).send(filteredTitle)
    }    
}

const getByGenre = (request, response) => {
    // acessar qual o gênero requisitado
    const requestedGenre = request.query.genre;
    let movieList = [];

    // comparar todos os itens da lista que são daquele gênero
    
    movies.forEach(movie => {
        let genreList = movie.genre.split(",")

        for (genre of genreList) {
            if (genre.includes(requestedGenre) && movie.genre.includes(genre)) {
                console.log(movie)
                movieList.push(movie)
            }
        }

    })

    // retornar a resposta
    response.status(200).send(movieList)
}




module.exports = {home, getAll, getById, getByTitle, getByGenre}
