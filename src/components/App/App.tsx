import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesPage from "../ArticlesPage/ArticlesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
