const rudiments = require('../db/seeds/00-rudiments.json');

function list(req, res, next) {
    res.json({ data: rudiments });
}

module.exports = {
    list,
}