import { createGlobalStyle } from "styled-components";

export const BodyDefaultStyling = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }

  main { 
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }

  h1, h2, h3, p, body {
    margin: 0
  }

  h1 {
    font-weight: 800;
    font-size: 3rem;
    width: 100%;
    border-bottom: 4px solid ${props => props.theme.colors.text};
    text-align: center;
;
  }

  h2 {
    margin-block: 4rem;
    font-weight: 800;
    font-size: 2.5rem;

  }
`
export const theme = {
  colors:{
    text: "#021b16",
    background: "#f2fbf9",
    primary: "#1cefbd",
    secondary: "#86c7f6",
    accent: "#4472f1",
  } 
}