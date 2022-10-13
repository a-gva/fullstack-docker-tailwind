// importa a função de solicitação de dados de um usuário, e a seguir...
// executa a solicitação no banco de dados e retorna os dados

import { getUser } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const { id } = req.body;
  const user = await getUser(id);
  res.status(200).json(user);
}
