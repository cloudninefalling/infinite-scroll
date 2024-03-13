import { Feed } from "@/pages/feed";
import { Route, Routes } from "react-router-dom";
import { BodyDefaultStyling, theme } from "./app.styles";
import { ThemeProvider } from "styled-components";
import { PostPage } from "@/pages/post/ui";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { postsApi } from "@/entities/post/api";
function App() {
  return (
    <ApiProvider api={postsApi}>
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
    </ApiProvider>
  );
}

export default App;
