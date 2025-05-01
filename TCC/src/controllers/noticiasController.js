import express from 'express';
import connectDB from '../repository/mysql.js';
import {user_id} from "../controllers/loginController.js"

const noticiasRouter = express.Router();

noticiasRouter.get("/", async (req, res) => {
    const id = user_id;
    try {
        const connection = await connectDB.connectDB();
        const [rows] = await connection.query(`SELECT date_format(b.data, '%d-%m-%y') as fdata, b.*, c.descricao, d.nome FROM favoritos a INNER JOIN datas b ON a.id_faculdade = b.id_instituicao INNER JOIN categoria_datas c ON c.id = b.id_categoriaData INNER JOIN instituicao d ON d.id = a.id_faculdade WHERE a.id_usuario = ${id} order by data desc limit 4;`);
        res.status(200).json(rows);
    } catch (err) {
        console.error("Erro ao buscar notícias:", err);
        res.status(500).json({ message: "Erro ao buscar notícias" });
    }
});

export default noticiasRouter;