import { getUser } from '@/app/api/db/users';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type Params = {
  id: string;
};

export async function GET(req: NextRequest, context: { params: Params }) {
  const userID = context.params.id;

  try {
    const user = await getUser(userID);
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({
      statusCode: 500,
      message: error.message,
      userID: userID || 'No user ID',
    });
  }
}
