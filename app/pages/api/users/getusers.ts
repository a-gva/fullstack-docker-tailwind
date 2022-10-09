// importa a função de listar usuários usuário, e a seguir...
// executa a solicitação no banco de dados

import { getUsers } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await getUsers();
  res.status(200).json(users);
}
