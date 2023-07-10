# CASHBACK API - [Postgres]

Projeto desenvolvido na disciplina de `Desenvolvimento de Serviços e APIs` do curso de Análise e Desenvolvimento de Sistemas - Faculdade UniSenac - SENAC-RS.

<br>

## Sobre a API

Esta API tem como funcionalidades principais o `cadastro de usuários (Users)`, `cadastro de clientes (Customers)` e o `registro de vendas (Orders)`.

A cada veda é gerado um valor de `CASHBACK` para o cliente, que na sua próxima compra receberá este valor como `desconto`. No momento o percentual de CASHBACK por venda está fixado em `15%`.

As rotas `get` são `públicas` e as rotas `post` e `update` são `privadas` (requerem autenticação do usuário.)

<br>

## Install

Para instalar as dependência do projeto execute no terminal o comando `npm install`.

<br>

## Run project

Para executar o projeto execute no terminal o comando `npm run dev`.

<br>

## API Swagger DOCs

[Develop](https://cashback-api-postgres-dev-ee44243735bc.herokuapp.com/api-docs/)

[Production](https://cashback-api-postgres-prod-653317d3b440.herokuapp.com/api-docs/)
