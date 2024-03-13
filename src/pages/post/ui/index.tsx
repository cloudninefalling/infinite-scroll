import { useGetPostByIdQuery } from "@/entities/post/api";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Id, IdContainer, Text, Title } from "./styles";

export function PostPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const intId = parseInt(id || "");
  const { data, error, isLoading } = useGetPostByIdQuery(intId);

  return error ? (
    "Something went wrong, try again later."
  ) : isLoading ? (
    "Loading..."
  ) : (
    <>
      <h2>Post</h2>
      <Container>
        <IdContainer>
          <Id>user ID: {data?.userId}</Id>
          <Id>post ID: {id}</Id>
        </IdContainer>
        <Title>{data?.title}</Title>
        <Text>{data?.body}</Text>
      </Container>
      <Button type="button" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </>
  );
}
