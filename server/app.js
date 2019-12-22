require('dotenv').config();

const createError = require("http-errors");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", apiRouter);

app.use((req, res, next) => next(createError(404)));

app.listen(PORT, () => console.log("Server started"));
