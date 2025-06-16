import NoticiaPage from "./default";

import { getAllNoticiasSlugs, getNoticiasBySlug} from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllNoticiasSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getNoticiasBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getNoticiasBySlug(params.slug);
  return <NoticiaPage post={post} />;
}

export const revalidate = 60;
