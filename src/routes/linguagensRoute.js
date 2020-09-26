const express = require("express");
const router = express.Router();
const controller = require("../controller/linguagensController");

router.get("/", controller.getAll)
router.get("/linguagens", controller.getAll)
router.get("/:id", controller.getById);

module.exports = router;