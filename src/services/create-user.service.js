const UserEntity = require('../entities/user.entity');

class CreateUserService {

    constructor({ userRepository }) {
        this.userRepository = userRepository;
    };

    async create({ name, email, address, uf }) {
        
        const userinsert = new UserEntity({ name, email, address, uf })

        const user = await this.userRepository.create(userinsert);

        if (!user || user.length === 0) {
            throw new Error('Erro ao criar usuário');
        };

        return user;
    };
};

module.exports = CreateUserService;