const express = require("express");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

const logging = (req, res, next) => {
    console.log("A request was made.");
    next();
}


app.use(logging);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

