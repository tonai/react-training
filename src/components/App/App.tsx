import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { ICategory } from "../../types/Category";
import Layout from "../Layout/Layout";
import { categoriesContext } from "../../contexts/categories";
import Timer from "../Timer/Timer";

// import ArticlesPage from "../ArticlesPage/ArticlesPage";
// import ArticlePage from "../ArticlePage/ArticlePage";

const ArticlesPage = lazy(() => import("../ArticlesPage/ArticlesPage"));
const ArticlePage = lazy(() => import("../ArticlePage/ArticlePage"));

function App() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <BrowserRouter>
      <categoriesContext.Provider value={categories}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ArticlesPage />} />
            <Route path="article" element={<ArticlePage />} />
            <Route path="article/:id" element={<ArticlePage />} />
            <Route path="timer" element={<Timer />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </categoriesContext.Provider>
    </BrowserRouter>
  );
}
export default App;
