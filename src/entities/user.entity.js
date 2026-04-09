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
            throw new Error("Informações inválidas ou não fornecidas");
        }
        if (typeof uf !== "string" || uf.length !== 2) {
            throw new Error("UF deve ter exatamente 2 caracteres");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Email inválido");
        }
        if (name.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres");
        }
        if (address.trim().length < 5) {
            throw new Error("Endereço deve ter pelo menos 5 caracteres");
        }
    }
}

module.exports = UserEntity;