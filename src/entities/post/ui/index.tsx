import type { TPost } from "../model/post";
import { Link } from "react-router-dom";

type Props = {
  post: TPost;
};

export function PostCard({ post }: Props) {
  const { title, body, id } = post;

  return (
    <div>
      <p>{id}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Read more</Link>
    </div>
  );
}
