// importa a função de solicitação de dados de um usuário, e a seguir...
// executa a solicitação no banco de dados e retorna os dados

import { getUsers } from '@/app/api/db/users';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({
      statusCode: 500,
      message: `Could not fetch users. ${error.message}`,
    });
  }
}
