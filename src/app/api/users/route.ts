// importa a função de solicitação de dados de um usuário, e a seguir...
// executa a solicitação no banco de dados e retorna os dados

import { NextApiRequest, NextApiResponse } from 'next';
import { getUser } from '../db/users';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const { id } = req.body;
  const user = await getUser(id);
  return res.status(200).json(user);
}
