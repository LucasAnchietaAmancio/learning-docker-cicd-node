class UserEntity {

    constructor({ name, email, address, uf }) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.uf = typeof uf === 'string' ? uf.toLowerCase() : uf;
        UserEntity.validateInput(this.name, this.email, this.address, this.uf);
    }

    static validateInput(name, email, address, uf) {
        if (!name || !email || !address || !uf) {
            throw new Error("Informações Inválidas ou não fornecidas");
        }
        if (typeof uf !== "string" || uf.length > 2) {
            throw new Error("UF informada inválida para gravação");
        }
        if (!email.includes('@') || !email.includes('.com')) {
            throw new Error("Informações Inválidas ou não fornecidas");
        }
    }
}

module.exports = UserEntity;