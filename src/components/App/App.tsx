import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import ArticlePage from "../ArticlePage/ArticlePage";
import { useEffect, useState } from "react";
import { ICategory } from "../../types/Category";

function App() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<ArticlesPage categories={categories} />} />
          <Route
            path="/article"
            element={<ArticlePage categories={categories} />}
          />
          <Route
            path="/article/:id"
            element={<ArticlePage categories={categories} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
