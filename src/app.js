require("dotenv").config();
const express = require("express");

const app = express();

const movieControllers = require("../movieControllers.js");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUsersById);

module.exports = app;
