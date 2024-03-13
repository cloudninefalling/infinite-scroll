import styled from "styled-components";

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80%;
`

export const PostContainer = styled.li`
  display: grid;
  grid-template-columns: max-content 10vw auto max-content;
  gap: 2rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 1rem;
  padding: 1rem;
  align-items: center;
  max-width: 100%;
`;

export const PostId = styled.p`
  font-size: 2rem;
  font-weight: 800;
`

export const PostTitle = styled.h3`
  font-size: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PostBody = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  max-height: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  `

export const PostButton = styled.button`
font-weight: 800;
background-color: ${props => props.theme.colors.secondary};
border: none;
border-radius: 0.5rem;
padding: 0.5rem;
cursor: pointer;
transition: all 0.2s ease-in-out;
margin-block: auto;
margin-left: auto;
min-width: max-content;

&:hover {
  background-color: ${props => props.theme.colors.accent};
  padding: 0.6rem;
  box-shadow: -1px 2px 0 1px rgba(0,0,0,0.75);
}

`
