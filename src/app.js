require("dotenv").config();
const express = require("express");
const validateMovie = require("./middlewares/validateMovie.js");
const validateUser = require("./middlewares/validateUser.js");


const app = express();

app.use(express.json());

const movieControllers = require("../movieControllers.js");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUsersById);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, movieControllers.postUser);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.put("/api/users/:id", validateUser, movieControllers.updateUsers);
app.delete("/api/movies/:id", movieControllers.deleteMovieById);
app.delete("/api/users/:id", movieControllers.deleteUserById);


module.exports = app;
