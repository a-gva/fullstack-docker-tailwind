import { getUserById } from '../db/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getUserById(1);
  res.status(200).json({ result: user });
}

// Language: typescript
