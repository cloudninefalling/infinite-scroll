import { PostCard } from "@/entities/post";
import { PostList } from "./styles";

export function Feed() {
  return (
    <>
      <h2>Feed</h2>
      <PostList>
        <PostCard
          post={{ id: 1, title: "test", body: "this is a text" }}
        ></PostCard>
        <PostCard
          post={{
            id: 2,
            title: "test2",
            body: "this is a very long text in fact it is so long that it probably overtakes entire page length wow it really takes a lt of words doesnt it",
          }}
        ></PostCard>
      </PostList>
    </>
  );
}
