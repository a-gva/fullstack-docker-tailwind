import { deleteUser } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  const user = await deleteUser(id);
  res.status(200).json({ result: user });
}
