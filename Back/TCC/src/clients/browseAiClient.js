import request from "request";
import express, {response, Router} from "express";
import nodeSchedule from 'node-schedule';
const rota = express.Router();
let taskId;
import http from 'https'
let dados = [];
const dt = new Date(2025,2,2,22,2);

nodeSchedule.scheduleJob(dt,()=>{
 console.log("Olá mundo!")
 
}) 

rota.post("/runRobot",async (reques,respon)=>{

  const runRobot = {
    method: 'POST',
    url: 'https://api.browse.ai/v2/robots/aaf78b52-e6c7-4013-8b91-118f2be6d298/tasks',
    headers: {Authorization: 'Bearer db2a8d41-73d1-4006-bb19-4b7b5adf23e6:d7112e74-7512-40a6-9bc6-3ddcf9068c22'},
    body: {
      inputParameters: {
        originUrl: 'https://www.vestibulinhoetec.com.br/calendario/'
      }
    },
    json: true
  };
  
  request(runRobot, function (error, response, body) {
    if (error) throw new Error(error);
    taskId = body.result.id;
    dados = body.result.capturedTexts
    respon.json({ message: "Tarefa iniciada!", body });
  });

})

rota.get("/task",async (req,res)=>{
  const options = {
      method: 'GET',
      url: `https://api.browse.ai/v2/robots/aaf78b52-e6c7-4013-8b91-118f2be6d298/tasks/${taskId}`,
      headers: {Authorization: 'Bearer db2a8d41-73d1-4006-bb19-4b7b5adf23e6:d7112e74-7512-40a6-9bc6-3ddcf9068c22'}
    };
    
    

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      dados = body
      console.log(dados)
      let parsedBody;
      try {
          parsedBody = JSON.parse(body);
      } catch (e) {
          console.error("Erro ao converter body para JSON:", e);
          return res.status(500).json({ message: "Erro ao processar resposta da API" });
      }

      // Criar a resposta no formato desejado
      const resposta = {
          message: "Tarefa iniciada!",
          body: parsedBody
      };

      dados = parsedBody.result.capturedTexts
      console.log(JSON.stringify(resposta, null, 4));

      // Enviar a resposta corrigida
      res.json(dados);
  });
    
})


rota.get("/tasksRobot",async (reques,respon)=>{

const options = {
  "method": "GET",
  "hostname": "api.browse.ai",
  "port": null,
  "path": "/v2/robots/aaf78b52-e6c7-4013-8b91-118f2be6d298/tasks?page=1",
  "headers": {
    "Authorization": "Bearer db2a8d41-73d1-4006-bb19-4b7b5adf23e6:d7112e74-7512-40a6-9bc6-3ddcf9068c22"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
    const todasTarefas = body.toString();
    respon.json({ message: "Tarefa iniciada!", todasTarefas });
  });
});

req.end();
})


export default rota