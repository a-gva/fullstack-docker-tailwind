// importa a função de listar usuários usuário, e a seguir...
// executa a solicitação no banco de dados
import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser } from '../db/users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //return with erro handling
  if (req.method === 'PUT') {
    try {
      const user = await deleteUser(req.query.id as string);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  }
}
