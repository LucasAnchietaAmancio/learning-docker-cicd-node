# Exercício Backend + DevOps

Projeto para treinar integração entre:

- Node.js
- Express
- PostgreSQL
- Docker
- GitHub Actions

O objetivo é criar uma API simples, containerizar a aplicação e configurar um pipeline de CI.

---

## Objetivo

Criar uma API REST que salva usuários em um banco PostgreSQL, rodando em container Docker e com testes executados automaticamente via CI.

---

## Tecnologias

- Node.js
- Express
- PostgreSQL
- Docker
- GitHub Actions
- Jest

---

## Estrutura do Projeto

```
atividade-docker-github-actions
├─ src
│  ├─ entities
│  └─ services
├─ tests
│  └─ entities
│  └─ services
├─ Dockerfile
├─ package.json
├─ README.md
└─ .github/workflows/ci.yml
```

---

## Funcionalidades

### Criar usuário

POST /users

Body:

```json
{
  "name": "Lucas",
  "email": "lucas@email.com",
  "addess": "rua 1 bairro x",
  "uf": "MT"
}
```

### Listar usuários

GET /users

Retorno esperado:

```json
[
  { "id": 1, "name": "Lucas", "email": "lucas@email.com" }
]
```

---

## Banco de dados

Banco utilizado: PostgreSQL

Configuração padrão:

- host: localhost
- port: 5432
- database: docker_api
- user: postgres
- password: postgres

Tabela:

- users

Campos:

- id SERIAL PRIMARY KEY
- name TEXT
- email TEXT

---

## Docker

Subir container do banco:

```bash
docker run -d \
  --name postgres-api \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=docker_api \
  -p 5432:5432 \
  postgres
```

Build da aplicação:

```bash
docker build -t node-api .
```

Rodar container da API:

```bash
docker run -p 3000:3000 node-api
```

---

## Testes

Executar testes:

```bash
npm test
```

Teste obrigatório:

- POST /users
- retorna status 201
- usuário criado no banco

---

## CI

Pipeline configurado com GitHub Actions.

Arquivo:

`.github/workflows/ci.yml`

Executado quando ocorre:

- push na branch `main`

Fluxo:

- push → install dependencies → run tests

---

## Arquitetura

- Docker Host
  - Container API (Node + Express)
  - Container Database (PostgreSQL)
```// filepath: /home/lucas/dev/atividade-docker-github-actions/README.md
# Exercício Backend + DevOps

Projeto para treinar integração entre:

- Node.js
- Express
- PostgreSQL
- Docker
- GitHub Actions

O objetivo é criar uma API simples, containerizar a aplicação e configurar um pipeline de CI.

---

## Objetivo

Criar uma API REST que salva usuários em um banco PostgreSQL, rodando em container Docker e com testes executados automaticamente via CI.

---

## Tecnologias

- Node.js
- Express
- PostgreSQL
- Docker
- GitHub Actions
- Jest

---

## Estrutura do Projeto

```
atividade-docker-github-actions
├─ src
│  ├─ server.js
│  └─ db.js
├─ tests
│  └─ user.test.js
├─ Dockerfile
├─ package.json
├─ README.md
└─ .github/workflows/ci.yml
```

---

## Funcionalidades

### Criar usuário

POST /users

Body:

```json
{
  "name": "Lucas",
  "email": "lucas@email.com"
}
```

### Listar usuários

GET /users

Retorno esperado:

```json
[
  { "id": 1, "name": "Lucas", "email": "lucas@email.com" }
]
```

---

## Banco de dados

Banco utilizado: PostgreSQL

Configuração padrão:

- host: localhost
- port: 5432
- database: docker_api
- user: postgres
- password: postgres

Tabela:

- users

Campos:

- id SERIAL PRIMARY KEY
- name TEXT
- email TEXT

---

## Docker

Subir container do banco:

```bash
docker run -d \
  --name postgres-api \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=docker_api \
  -p 5432:5432 \
  postgres
```

Build da aplicação:

```bash
docker build -t node-api .
```

Rodar container da API:

```bash
docker run -p 3000:3000 node-api
```

---

## Testes

Executar testes:

```bash
npm test
```

Teste obrigatório:

- POST /users
- retorna status 201
- usuário criado no banco

---

## CI

Pipeline configurado com GitHub Actions.

Arquivo:

`.github/workflows/ci.yml`

Executado quando ocorre:

- push na branch `main`

Fluxo:

- push → install dependencies → run tests

---

## Arquitetura

- Docker Host
  - Container API (Node + Express)
  - Container Database (PostgreSQL)