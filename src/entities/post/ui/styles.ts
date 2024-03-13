import styled from "styled-components";

export const PostContainer = styled.li`
  display: grid;
  grid-template-columns: max-content 8vw auto max-content;
  gap: 2rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 1rem;
  box-shadow: 1px 1px 0 1px rgba(0,0,0,0.75);
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
  text-transform: capitalize;
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
box-shadow: 2px 2px 0 1px rgba(0,0,0,0.75);


&:hover {
  background-color: ${props => props.theme.colors.accent};
  padding: 0.6rem;
  box-shadow: 3px 3px 0 1px rgba(0,0,0,0.75);
}

`
