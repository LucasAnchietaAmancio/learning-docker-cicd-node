const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const pool = require('./src/config/db/postgre.config');
const CreateUserService = require('./src/services/create-user.service');
const UserRepository = require('./src/repositories/user.repository');
const userRepository = new UserRepository({ databaseClient: pool });
const createUserService = new CreateUserService({ userRepository });


const app = express();
app.use(express.json());

app.get('/', (req, res)=> {
    res.send("Hello World!")
});

app.post('/users', async (req, res) => {

    const { name, email, address, uf } = req.body;

    try {
        const user = await createUserService.create({ name, email, address, uf });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    };
});

app.listen(3001);