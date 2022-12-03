const express = require("express");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const rudimentsRouter = require("./rudiments/rudiments.router");

const app = express();

const logging = (req, res, next) => {
    console.log("A request was made.");
    next();
}

app.use(logging);
app.use("/rudiments", rudimentsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

