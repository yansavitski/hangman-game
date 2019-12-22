const createError = require("http-errors");
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

const apiRouter = require("./api/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", apiRouter);

app.use((req, res, next) => next(createError(404)));

app.listen(PORT);
