const CreateUserService = require('../../src/services/create-user.service');
const UserEntity = require('../../src/entities/user.entity');

test('Deve retornar um erro caso o usuário não seja criado', async () => {

    const userRepositoryMock = {
        create: jest.fn().mockResolvedValue(null)
    };

    const createUserService = new CreateUserService({ userRepository: userRepositoryMock });

    await expect(createUserService.create({
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        uf: "SP"
    })).rejects.toThrow('Erro ao criar usuário');
    expect(userRepositoryMock.create).toHaveBeenCalledTimes(1);
    expect(userRepositoryMock.create).toHaveBeenCalledWith(expect.any(UserEntity));
});

test('Deve criar um usuário com sucesso', async () => {

    const userRepositoryMock = {
        create: jest.fn().mockResolvedValue({
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            address: "123 Main St",
            uf: "SP"
        })
    };

    const createUserService = new CreateUserService({ userRepository: userRepositoryMock });

    const result = await createUserService.create({
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        uf: "SP"
    });

    expect(result).toEqual({
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        uf: "SP"
    });
    expect(userRepositoryMock.create).toHaveBeenCalledTimes(1);
    expect(userRepositoryMock.create).toHaveBeenCalledWith(expect.any(UserEntity));
});