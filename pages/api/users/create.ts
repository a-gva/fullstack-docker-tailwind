// importa a função de criação de usuário, e a seguir...
// executa a solicitação no banco de dados

import { createUser } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const { name, email } = req.body;
  const user = await createUser(name, email);
  res.status(200).json({ result: user });
}
