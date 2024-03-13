import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme.colors.primary};
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 4px 4px 0 8px #000;
  max-width: 70%;
  margin: 0 auto;
`

export const IdContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

`

export const Id = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  display: inline;
`

export const Title = styled.h3`
  font-size: 3rem;
  text-align: center;
  text-transform: capitalize;
`

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`

export const Button = styled.button`
margin-top: 4rem;
margin-inline: auto;
background-color: ${props => props.theme.colors.secondary};
padding: 2rem;
border-radius: 1rem;
border: none;
box-shadow: 2px 2px 0 4px #000;
font-size: 2rem;
font-weight: 600;
cursor: pointer;
transition: all 0.1s ease-in-out;

&:hover {
  padding: 2.2rem;
  background-color: ${props => props.theme.colors.accent};
  box-shadow: 3px 3px 0 5px #000;
;
}

`
