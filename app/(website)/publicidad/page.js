import Publicidad from "./publicidad";
import { getAllPublicidad } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPublicidad();
  return <Publicidad posts={posts} />;
}

export const revalidate = 60;
