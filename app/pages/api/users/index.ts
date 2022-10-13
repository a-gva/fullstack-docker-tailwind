// importa a função de listar todos os usuários
// executa a solicitação no banco de dados
// renderiza os dados em tela

import { getUsers } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //return with erro handling
  try {
    const users = await getUsers();
    res.status(200).json(users);
    // console.log(users);
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
