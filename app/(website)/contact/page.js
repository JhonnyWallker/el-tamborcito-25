import Contact from "./contact";
import { getAllNoticias } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllNoticias();
  return <Contact posts={posts} />;
}

export const revalidate = 60;
