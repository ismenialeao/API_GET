
const series = require("../models/series.json")  

const home = (request, response) =>{            
    response.status(200).send("Hello friends")

}

const getTudo = (request, Response) =>{ 
    response.status(200).send(series)
}

const getNomes = (request, response) =>{
   const requestNome = request.query.nome.toLowerCase()
    const filterNome = series.find(serie => serie.nome.toLowerCase().includes(requestNome))

    if ( filterNome === "" || filterNome === undefined){ 
        response.status(404).send("Insira um nome valido por favor!!!") 
    }
    else{
        response.status(200).send(filterNome) 
    }
}
const getGenero = (request, response) =>{

    const requestGenero = request.query.genero //acessando o genero
    let serieList = []

    series.forEach( series => {   //para todos arrays da series percorridos com forEath separe os por virgula
        listaGenero = series.genero.split(",")

        for ( genero of listaGenero) {
            if(genero.includes(requestGenero) && series.genero.includes(genero)){
                console.log(series)
                serieList.push(series)
            }
        }


    })
    response.status(200).send.serieList 

}
const getID = (request, response)=> {
    idRequerido = request.params.id
    idFiltrado = filmes.find(filme =>filme.id == idRequerido)
    response.status(200).send(idFiltrado)

}

module.exports = {home,getTudo, getNomes, getGenero, getID} 