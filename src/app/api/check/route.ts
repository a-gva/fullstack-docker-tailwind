// importa a função de solicitação de dados de um usuário, e a seguir...
// executa a solicitação no banco de dados e retorna os dados

export async function GET() {
  return Response.json({ status: 'OK', message: 'Welcome' });
}
