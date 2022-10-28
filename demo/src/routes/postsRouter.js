const { Router } = require("express");


const postsRouter = Router();


postsRouter.get("/", (req, res) => {
    res.send("Estoy en las rutas de posts");
});


//POSTS
//RUTA GET POSTS => PARA QUE ME TRAIGA TODOS LOS POSTS
//RUTA POST/:ID => PARA QUE ME TRAIGA EL POST DEL ID
//RUTA POST POSTS => PARA CREAR POST (OJO!)
//RUTA PUT DE POST => PARA MODIFICAR EL POST
//RUTA DELETE DE POSTS => PARA BORRAR EL POST 

module.exports = postsRouter;