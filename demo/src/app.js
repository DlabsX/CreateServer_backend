const express = require('express');
const morgan = require("morgan");
const usersRouter = require("./routes/usersRouter");
const postsRouter = require("./routes/postsRouter");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.use("/users", usersRouter);
server.use("/posts", postsRouter);


server.get("/", (req, res) => {
res.send("Hello world!");

});


//EXTRA => RUTA LIKE




module.exports = server;
