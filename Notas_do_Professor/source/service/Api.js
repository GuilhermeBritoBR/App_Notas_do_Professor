const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const MySql = require('mysql');
const cors = require('cors');
//este serve para gerar token do usuario
const jwt = require('jsonwebtoken');
//criando aplicação
const app = express();
//rotas da aplicação
const router = express.Router();
//porta da aplicação
const PORTA = 3000;
//criar conexão com mysql
//variavel DB do mysql
const db = MySql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': 'flamengo',
    'database': `notasDoProfessor`
})
//cors
app.use(cors());
// Usando o middleware para parsear JSON
app.use(express.json());

// Usando o middleware para parsear dados de formulário
app.use(express.urlencoded({ extended: true }));

//Cadastro dos dados
app.post('/registerPage/cadastroDoProfessor',(req,res)=>{
    //coletando nome e senha
    const {name,email, password}= req.body;
    //verificando valor destas
    console.log(`Respectivamente as variaveis: ${name,email, password}`);
    //variavel com comando SLQ para inserir dados na tabela credenciais
    const InserirDadosSQL = "INSERT INTO credenciaisdousuario (nome, email, senha) VALUES (?,?,?)";
    //salvar esses dados em um banco de dados próprio do usuário
    db.query(InserirDadosSQL,[name,email,password],(err,resposta)=>{
        if(err){
            console.log(`Erro Ao inserir Dados na tabela de cadastro na RegisterPage, segue o erro: ${err}`);
            return;
        }else{
            //token para validação
            const token = jwt.sign({email}, 'secreto', {expiresIn: '1h'});
            //envio do token mais resposta da API
            res.json({Mensagem: `Cadastro da RegisterPage Realizado com Sucesso!${resposta}`,name, token});
        }
    })

});
//login do usuário
app.post('/loginPage/loginDoProfessor',(req,res)=>{
    //coletando email e senha
    const {email, password}= req.body;
    //comando slq para verificar valoress
    const ValidarDadosSQL = "SELECT * FROM credenciaisdousuario WHERE email = ? AND senha = ?";
    //verificar dados do SQL
    db.query(ValidarDadosSQL,[email,password],(err,resposta)=>{
        if(err){
            console.log(`Erro Ao verificar Dados na tabela de cadastro na LoginPage, segue o erro: ${err}`);
            return;
        }else{
            //token para validação
            const token = jwt.sign({email}, 'secreto', {expiresIn: '1h'});
            //envio do token mais resposta da API
            res.json({Mensagem: `Cadastro da RegisterPage Realizado com Sucesso!${resposta}`, token});
        }
    })
})
//rodar api
app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
  });
module.exports = router;