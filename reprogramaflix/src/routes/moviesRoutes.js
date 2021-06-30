const controller = require("../controllers/moviesControlles")

const express = require("express")

const router = express.Router()

router.get("/", controller.home)
router.get("/todos", controller.getAll)
router.get("/titulo", controller.getByTitle )
router.get("/genero", controller.getByGenre) 
router.get("/:id", controller.getById)

module.exports = router