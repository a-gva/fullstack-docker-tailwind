// importa a função de atualização de usuário no banco, e a seguir...
// executa a solicitação no banco de dados

import { updateUser } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, name, email } = req.body;
  const user = await updateUser(id, name, email);
  res.status(200).json({ result: user });
}
