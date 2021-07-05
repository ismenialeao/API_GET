const controller  = require("../controllers/seriesControlles");

const express = require("express");

const router = express.Router()

router.get("/", controller.home )
router.get("/tudo", controller.getTudo)
router.get("/nomes", controller.getNomes)
router.get("/genero", controller.getGenero)
router.get("/id:", controller.getID)