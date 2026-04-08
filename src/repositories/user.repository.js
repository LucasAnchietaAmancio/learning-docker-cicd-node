

class UserRepository {

    constructor({ databaseClient }) {
        this.databaseClient = databaseClient;
    };

    async create(userEntity) {

        try{

            const { name, email, address, uf } = userEntity;
            const query = 'INSERT INTO users (name, email, address, uf) VALUES ($1, $2, $3, $4) RETURNING *';
            const values = [name, email, address, uf];
            const result = await this.databaseClient.query(query, values);
            return result.rows[0];

        } catch (error) {
            throw new Error('Erro ao criar usuário');           
        };
    };
};

module.exports = UserRepository;