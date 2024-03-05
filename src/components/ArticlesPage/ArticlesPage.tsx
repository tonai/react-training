import { useEffect, useState } from "react";
import Article from "../Article/Article";
import { ICategory } from "../../types/Category";
import { useArticles } from "../../hooks/useArticles";
import Filters, { FilterPublished, IFilters } from "../Filters/Filters";
import Container from "../Container/Container";
// import Resize from "../Resize/Resize";

const apiUrl = "http://localhost:3001/categories";

function ArticlesPage() {
  const [filters, setFilters] = useState<IFilters>({
    title: "fdfsdf",
    category: "",
    published: "",
  });
  const { title, category, published } = filters;

  const articles = useArticles();

  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  const filteredArticles = articles
    .filter((article) => article.title.includes(title))
    .filter(
      (article) => article.category === Number(category) || category === ""
    )
    .filter(
      (article) =>
        published === FilterPublished.ALL ||
        (published === FilterPublished.PUBLISHED && article.published) ||
        (published === FilterPublished.DRAFT && !article.published)
    );

  return (
    <div>
      <Container header="Container title">
        <Filters
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />
        {filteredArticles.map((article) => (
          <Article key={article.id} article={article} categories={categories} />
        ))}
        {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
        {/* {count % 2 === 0 && <Resize />} */}
      </Container>
    </div>
  );
}

export default ArticlesPage;
