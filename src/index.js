// Pacotes Node
const express = require("express"); // Link da API com servidor.
const morgan = require("morgan");   // Middleware de logging de requisições HTTP (respostas no console).

const app = express();  // Declaração de variavel 

app.use(express.json());    // Ler código json.
app.use(express.urlencoded({ extended: true }));    // Transforma os dados codificados na URL em um objeto JavaScript.
app.use(morgan('dev'))  // Registra no console, de forma concisa e colorida, cada requisição HTTP recebida.

app.use(require('./routes'));   // Linka o arquivo routes

app.listen(3000);   // Porta para localhost