import bancodados from "../repository/mysql.js"
async function cadastrarUsuario(nome,cpf,email,senha,celular,cep,data_nasc,premium,deletado) {
    const sql = "INSERT INTO usuarios(nome,cpf,email,senha,telefone,cep,data_nasc,premium,deletado) values(?,?,?,?,?,?,?,?,?)"

    const  informacoesUsuario = [nome,cpf,email,senha,celular,cep,data_nasc,premium,deletado]
    const conexao = await bancodados.connectDB();
    await conexao.query(sql,informacoesUsuario);
    conexao.end();
}

async function listarUsuario() {
    const sql = "SELECT * FROM usuarios where deletado = 0"

    const conexao = await bancodados.connectDB()
    const [rows] = await conexao.query(sql)
    conexao.end();
    return rows
}

async function atualizarDados(nome,cpfatualizado,email,senha,celular,cep,data_nasc,premium,deletado,cpf) {
    const sql = "UPDATE usuarios SET nome = ?, cpf = ?, email = ?, senha = ?, telefone = ?, cep = ?, data_nasc = ?, premium = ?, deletado = ? WHERE cpf = ?"

    const informacoesUsuario = [nome,cpfatualizado,email,senha,celular,cep,data_nasc,premium,deletado,cpf];
    const conexao = await bancodados.connectDB();
    await conexao.query(sql,informacoesUsuario);
    conexao.end();
}

async function deletarUsuario(cpf) {
    const sql = "UPDATE usuarios SET deletado = 1 WHERE cpf = ?";

    const informacoesUsuario = [cpf]
    const conexao = await bancodados.connectDB();
    await conexao.query(sql,informacoesUsuario);
    conexao.end();
}

export default{cadastrarUsuario,listarUsuario,atualizarDados,deletarUsuario}