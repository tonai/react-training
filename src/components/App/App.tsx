import { useEffect, useState } from "react";
import Article from "../Article/Article";
import { ICategory } from "../../types/Category";
import { useArticles } from "../../hooks/useArticles";
import Filters, { FilterPublished } from "../Filters/Filters";
// import Resize from "../Resize/Resize";

function App() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [published, setPublished] = useState("");

  const articles = useArticles();

  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
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
      <Filters
        title={title}
        setTitle={setTitle}
        category={category}
        setCategory={setCategory}
        published={published}
        setPublished={setPublished}
      />
      {filteredArticles.map((article) => (
        <Article key={article.id} article={article} categories={categories} />
      ))}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {/* {count % 2 === 0 && <Resize />} */}
    </div>
  );
}

export default App;
