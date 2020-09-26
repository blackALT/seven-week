const express = require("express");
const router = express.Router();
const controller = require("../controller/cidadesController");

router.get("/", controller.getAll)
router.get("/cidades", controller.getAll)
router.get("/:id", controller.getById);

module.exports = router;