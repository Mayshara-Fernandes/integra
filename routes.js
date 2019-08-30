const express = require('express');

const routes = express.Router();
const UserController = require('./controller/usuarioController');

routes.get("/usuario", UserController.index);
routes.get("/usuario/:id", UserController.show);
routes.post("/usuario", UserController.storage);
routes.put("/usuario/:id", UserController.update);
routes.delete("/usuario/:id", UserController.destroy);




module.exports = routes;