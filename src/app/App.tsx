import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div></div>} />
      <Route path="/post" element={<div></div>} />
    </Routes>
  );
}

export default App;
