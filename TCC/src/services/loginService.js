import database from '../repository/mysql.js';

async function login(email,password) {
    const sql = 'select * from usuarios where email=? and senha=?'
    const dataLogin = [email,password]
    const con = await database.connectDB();
    const [rows] = await con.query(sql,dataLogin);
    con.end();

    return rows[0]
}

async function buscarUsuarioPorEmail(email) {
    const conexao = await database.connectDB(); // 🔥 Aqui está o que faltava!
    const result = await conexao.query("SELECT nome, email, id FROM usuarios WHERE email = ?", [email]);
    conexao.end(); // Fechar conexão para evitar problemas de conexões pendentes
    console.log("🔍 Resultado da consulta:", result);
    return result[0][0]; // 🔥 Tenta acessar diretamente o primeiro item
}

export default {login,buscarUsuarioPorEmail}