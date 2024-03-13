import { Feed } from "@/pages/feed";
import { Route, Routes } from "react-router-dom";
import { BodyDefaultStyling, theme } from "./App.styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BodyDefaultStyling />
      <main>
        <h1>Project: Infinite Scroll</h1>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/posts/:id" element={<div>HELLO</div>} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
