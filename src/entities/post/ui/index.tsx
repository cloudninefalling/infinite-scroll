import { useNavigate } from "react-router-dom";
import type { TPost } from "../model";
import {
  PostBody,
  PostButton,
  PostContainer,
  PostId,
  PostTitle,
} from "./styles";

type Props = {
  post: TPost;
};

export function PostCard({ post }: Props) {
  const { title, body, id } = post;
  const navigate = useNavigate();

  return (
    <PostContainer>
      <PostId>{id}</PostId>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
      <PostButton type="button" onClick={() => navigate(`/posts/${id}`)}>
        Read More
      </PostButton>
    </PostContainer>
  );
}
