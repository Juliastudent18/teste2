import express, {request, response, Router} from "express";
import usuarioService from "../services/usuarioService.js";
const rota = express.Router();


rota.get("/", async (request,response)=>{
    const usuarios = await usuarioService.listarUsuario();

    if(usuarios.length < 1){
        return response.status(204).end();
    }

    return response.status(200).send({"messagem":usuarios})
})


rota.post("/", async (request,response)=>{
    const {nome,cpf,email,senha,celular,cep,data_nasc,premium,deletado} = request.body;
    //Verifica se a senha tem ao menos 5 caracteres
    if(senha.length <= 4){
        return response.status(400).send({"message":"Sua senha deve ter no minimo 5 caracteres."});
    }

    //Verifica se o campo nome foi preenchido
    if(nome == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo cpf foi preenchido
    if(cpf == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo email foi preenchido
    if(email == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo senha foi preenchido
    if(senha == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo celular foi preenchido
    if(celular == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    
    //Verifica se o campo data de nascimento foi preenchido
    if(data_nasc == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    
    if(premium == null){
        premium = 0;
    }
    //Se todos os dados forem peenchidos de maneira correta o Cadastro e realizado com sucesso
    await usuarioService.cadastrarUsuario(nome,cpf,email,senha,celular,cep,data_nasc,premium,deletado)

    //Retorna a resposa dizendo que o usuario foi cadastrado
    return response.status(201).send({"message":"Usuario cadastrado com sucesso!"})
})

rota.put('/:cpf', async(request,response)=>{
    const {nome,cpfatualizado,email,senha,celular,cep,data_nasc,premium,deletado} = request.body;
    const {cpf} = request.params;

    //Verifica se a senha tem ao menos 5 caracteres
    if(senha.length <= 4){
        return response.status(400).send({"message":"Sua senha deve ter no minimo 5 caracteres."});
    }


    //Verifica se o campo nome foi preenchido
    if(nome == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo email foi preenchido
    if(email == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo senha foi preenchido
    if(senha == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }

    //Verifica se o campo celular foi preenchido
    if(celular == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    
    //Verifica se o campo data de nascimento foi preenchido
    if(data_nasc == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    
    if(premium == null){
        premium = 0;
    }
    await usuarioService.atualizarDados(nome,cpfatualizado,email,senha,celular,cep,data_nasc,premium,deletado,cpf);
    return response.status(200).send({"message":"Dados do usuario atualizados com sucesso!"})
})

rota.delete('/:cpf',async(request,response)=>{
    const {cpf} = request.params;

    await usuarioService.deletarUsuario(cpf);
    return response.status(200).send({"message":"Ususario deletado com sucesso!"})
})

export default rota