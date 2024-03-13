import { useParams } from "react-router-dom";

export function PostPage() {
  const { id } = useParams();

  return (
    <>
      <h2>Post</h2>
      <p>{id}</p>
      <h3>title</h3>
      <p>body</p>
      <p>poster:</p>
    </>
  );
}
