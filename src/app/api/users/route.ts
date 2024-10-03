// importa a função de solicitação de dados de um usuário, e a seguir...
// executa a solicitação no banco de dados e retorna os dados

import { createUser, getUsers, updateUser } from '@/app/api/db/users';
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

export async function POST(req: NextRequest) {
  try {
    const res = await req.formData();
    const name = res.get('name');
    const email = res.get('email');

    if (!name || !email) {
      return NextResponse.json({
        statusCode: 400,
        message: 'Name and email are required',
      });
    }

    await createUser(name as string, email as string);
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({
      statusCode: 500,
      message: `Could not create user. ${error.message}`,
    });
  }
}
export async function PATCH(req: NextRequest) {
  try {
    const res = await req.formData();
    const id = res.get('id');
    const name = res.get('name');
    const email = res.get('email');

    if (!name || !email) {
      return NextResponse.json({
        statusCode: 400,
        message: 'Name and email are required',
      });
    }

    await updateUser(id as string, name as string, email as string);
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({
      statusCode: 500,
      message: `Could not update user. ${error.message}`,
    });
  }
}
