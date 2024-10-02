import { getUser } from '@/app/api/db/users';
import type { NextRequest } from 'next/server';
type Params = {
  userID: string;
};

export async function GET(request: NextRequest, context: { params: Params }) {
  try {
    const user = await getUser(context.params.userID);
    return Response.json({ user: user });
  } catch (error: any) {
    return Response.json({ statusCode: 500, message: error.message });
  }
}
