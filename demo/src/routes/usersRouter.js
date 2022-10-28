
//const express = require("express");
const { Router } = require("express");
const { getUsers } = require("../models/controllers");

//const usersRouter = express.Router();

const usersRouter = Router();

usersRouter.get("/",(req,res)=>{
    const users = getUsers();
    res.status(200).send(users);

})

//USERS
//RUTA GET USERS => PARA QUE ME TRAIGA TODOS LOS USUARIOS O BUSQUE POR NOMBRE
//RUTA GET USERS/:ID => PARA QUE ME TRAIGA EL USUARIO DEL ID CORRESPONDIENTE
//RUTA POST DE USERS => CREAR UN NUEVO USUARIO
//RUTA PUT DE USERS => PARA MODIFICAR EL USUARIO CORRESPONDIENTE
//RUTA DELETE DE USERS => PARA ELIMINAR EL USUARIO CORRESPONDIENTE











module.exports = usersRouter;

