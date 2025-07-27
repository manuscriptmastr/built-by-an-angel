import { ITEMS } from "@/app/items";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const searchId = parseInt(id, 10);
  const item = ITEMS.find(({ id }) => id === searchId);
  return Response.json(item);
};
