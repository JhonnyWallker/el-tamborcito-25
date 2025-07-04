import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import PublicidadList from "@/components/publicidadlist";
import Sidebar from "@/components/sidebar";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <Sidebar title="Publicidad" />
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-10">
            {posts.slice(0, 2).map(post => (
              <PublicidadList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PublicidadList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          
        </Container>
      )}
    </>
  );
}
