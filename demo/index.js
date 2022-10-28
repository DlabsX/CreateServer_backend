//nuestro index se va a encargar nada mas que de levantar nuestro servidor

const server = require("./src/app");


server.listen("3001", ()=>{

    console.log("server listening on port 3001");
});