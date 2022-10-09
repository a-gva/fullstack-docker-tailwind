// declara todas as funções de consulta na base de dados relacionadas ao endereço api/users usando a sintaxe do prisma
// ex: api/users/getusers - retorna todos os usuários
// ex: api/users/getuserbyid - retorna um usuário específico
// ex: api/users/create - cria um novo usuário

import { prisma } from './db';

export function getUsers() {
  return prisma.user.findMany();
}

export function getUserById(id: number) {
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

export function deleteUser(id: number) {
  return prisma.user.delete({
    where: {
      id: id,
    },
  });
}

export function updateUser(id: number, name: string, email: string) {
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
