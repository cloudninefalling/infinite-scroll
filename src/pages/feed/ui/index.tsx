import { useGetPostsQuery } from "@/entities/post/api";
import { PostList } from "./styles";
import { PostCard } from "@/entities/post";

export function Feed() {
  const { data, error, isLoading } = useGetPostsQuery();

  console.log(data ? data[0] : 0);

  return (
    <>
      <h2>Feed</h2>
      {error ? (
        <h3>Something went wrong, try again later.</h3>
      ) : isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <PostList>
          {data?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostList>
      )}
    </>
  );
}
