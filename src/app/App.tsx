import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Title>Hello World</Title>} />
    </Routes>
  );
}

export default App;
