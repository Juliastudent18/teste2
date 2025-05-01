import express from "express";
import usuarioController from "./controllers/usuarioController.js";
import browseAiClient from "./clients/browseAiClient.js";
import login from './controllers/loginController.js';
import noticiasRouter from "./controllers/noticiasController.js";

const rotas = express();

rotas.use("/usuario",usuarioController)
rotas.use("/API",browseAiClient)
rotas.use("/login",login)
rotas.use("/noticias", noticiasRouter)
export default rotas;