const UserEntity = require('../../src/entities/user.entity');

test('Deve retornar um erro caso os parametros não sejam passados', () => {
    expect(() => {
        new UserEntity({
            name: "",
            email: "",
            address: "",
            uf: ""
        });
    }).toThrow();
});

test('Deve retornar um erro caso a uf seja maior que 2 caracteres', () => {
    expect(() => {
        new UserEntity({
            name: "John Doe",
            email: "john.doe@example.com",
            address: "123 Main St",
            uf: "ZZZ"
        });
    }).toThrow();
});

test('Deve retornar um erro caso a uf seja do tipo diferente de string', () => {
    expect(() => {
        new UserEntity({
            name: "John Doe",
            email: "john.doe@example.com",
            address: "123 Main St",
            uf: 123
        });
    }).toThrow("UF deve ter exatamente 2 caracteres");
});

test('Deve retornar um erro caso o email seja inválido', () => {
    expect(() => {
        new UserEntity({
            name: "John Doe",
            email: "john.doeexample.com",
            address: "123 Main St",
            uf: "ZZ"
        });
    }).toThrow();
});

test('Deve criar uma instância de UserEntity com dados válidos', () => {
    const user = new UserEntity({
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        uf: "ZZ"
    });
    console.log(user);
    expect(user).toBeInstanceOf(UserEntity);
});