// importa a função de listar usuários usuário, e a seguir...
// executa a solicitação no banco de dados
import { InferGetStaticPropsType } from 'next';
import { getUser, deleteUser } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //return with erro handling
  if (req.method === 'GET') {
    try {
      const users = await getUser(req.query.id as string);
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const user = await deleteUser(req.query.id as string);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const user = await deleteUser(req.query.id as string);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  }
}
