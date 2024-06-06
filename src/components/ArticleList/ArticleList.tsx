import { useEffect, useState } from "react";
import Article from "../Article/Article";
// import Resize from "../Resize/Resize";
import { useArticles } from "../../hooks/useArticles";
import Filters from "../Filters/Filters";
import Container from "../Container/Container";
import { getCategories } from "../../services/category";
import { ICategory } from "../../types";

function ArticleList() {
  const articles = useArticles();
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({ title: "", category: "" });
  const { title, category } = filters;
  // const [count, setCount] = useState(0);
  const filteredArticles = articles
    .filter((article) => article.title.includes(title))
    .filter(
      (article) => category === "" || Number(category) === article.category,
    );
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getCategories().then((json) => setCategories(json));
  }, []);

  return (
    <>
      <Container>
        <Filters
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />
        {filteredArticles.map((art) => (
          <Article key={art.id} categories={categories} article={art} />
        ))}
      </Container>
      {/* <button onClick={() => setCount(count + 1)}>{count}</button>
      {count % 2 === 0 ? <Resize /> : null} */}
    </>
  );
}

export default ArticleList;
