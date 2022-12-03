const router = require("express").Router();
const controller = require("./rudiments.controller");

router.route("/")
    .get(controller.list);

module.exports = router;