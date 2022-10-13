// declara todas as funções de consulta na base de dados relacionadas ao endereço api/users usando a sintaxe do prisma
// ex: api/users/getusers - retorna todos os usuários
// ex: api/users/getuserbyid - retorna um usuário específico
// ex: api/users/create - cria um novo usuário

import { prisma } from './dbConnection';

export function getUsers() {
  return prisma.user.findMany();
}

export function getUser(id: string) {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}

export function createUser(name: string, email: string) {
  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
}

export function deleteUser(id: string) {
  return prisma.user.delete({
    where: {
      id: id,
    },
  });
}

export function updateUser(id: string, name: string, email: string) {
  return prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
    },
  });
}
