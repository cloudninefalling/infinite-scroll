import { Feed } from "@/pages/feed";
import { Route, Routes } from "react-router-dom";
import { BodyDefaultStyling, theme } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { PostPage } from "@/pages/post/ui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BodyDefaultStyling />
      <main>
        <h1>Project: Infinite Scroll</h1>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
