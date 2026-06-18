import { getTodos } from "@/lib/todos";
export async function GET() {
  const response = await getTodos();
  return Response.json(response.data);
}
