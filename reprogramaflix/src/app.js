

const express = require("express")
const app = express()



const movies = require("./routes/moviesRoutes")


app.use("/filmes", movies)

module.exports = app

//chama e definir as rotas arquitetura mvc