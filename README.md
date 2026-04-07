# Exercício Backend + DevOps

Exercício prático para treinar integração entre:

* Node.js
* Express
* PostgreSQL
* Docker
* GitHub Actions

O objetivo é criar uma API simples, containerizar a aplicação e configurar um pipeline de CI.

---

# Objetivo

Criar uma API REST que salva usuários em um banco PostgreSQL, rodando em container Docker e com testes executados automaticamente via CI.

---

# Tecnologias

* Node.js
* Express
* PostgreSQL
* Docker
* GitHub Actions
* Jest

---

# Estrutura do Projeto

docker-node-api

src
├─ server.js
└─ db.js

tests
└─ user.test.js

Dockerfile
package.json
README.md

---

# Funcionalidades

### Criar usuário

POST /users

Body:

{
"name": "Lucas",
"email": "[lucas@email.com](mailto:lucas@email.com)"
}

---

### Listar usuários

GET /users

Retorno esperado:

[
{ "id":1, "name":"Lucas", "email":"[lucas@email.com](mailto:lucas@email.com)" }
]

---

# Banco de dados

Banco utilizado: PostgreSQL

Configuração:

host: localhost
port: 5432
database: docker_api
user: postgres
password: postgres

Tabela:

users

Campos:

id SERIAL PRIMARY KEY
name TEXT
email TEXT

---

# Docker

Subir container do banco:

docker run -d 
--name postgres-api 
-e POSTGRES_PASSWORD=postgres 
-e POSTGRES_DB=docker_api 
-p 5432:5432 
postgres

---

Build da aplicação:

docker build -t node-api .

Rodar container da API:

docker run -p 3000:3000 node-api

---

# Testes

Executar testes:

npm test

Teste obrigatório:

POST /users

Validações:

* retorna status 201
* usuário criado no banco

---

# CI

Pipeline configurado com GitHub Actions.

Arquivo:

.github/workflows/ci.yml

Executado quando ocorre:

push na branch main

Fluxo:

push → install dependencies → run tests

---

# Arquitetura

Docker Host

Container API
(Node + Express)

Container Database
(PostgreSQL)
