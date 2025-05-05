import express from 'express';
import loginService from '../services/loginService.js';
const rota = express.Router();

let user_id = null; // aqui fora, pra ficar visível em todo o módulo

const { buscarUsuarioPorEmail } = loginService;

rota.get('/', async (req, res) => {
    const { email } = req.query;
    console.log("Email recebido:", email);

    try {
        const user = await buscarUsuarioPorEmail(email);

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        user_id = user.id; // salva o id aqui fora
        console.log("ID do usuário armazenado:", user_id);

        res.status(200).json(user);

    } catch (err) {
        console.error("Erro ao buscar no banco:", err);
        res.status(500).json({ message: `Erro no banco de dados: ${err}` });
    }
});

// exporta a rota e a variável com o id
export { rota as default, user_id };