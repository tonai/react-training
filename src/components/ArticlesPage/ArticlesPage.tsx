import { useCallback, useMemo, useState } from "react";
import Article from "../Article/Article";
import { useArticles } from "../../hooks/useArticles";
import Filters, { FilterPublished, IFilters } from "../Filters/Filters";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { getArticles, removeArticle } from "../../services/articles";
import Counter from "../Counter/Counter";
// import Resize from "../Resize/Resize";

function ArticlesPage() {
  const [filters, setFilters] = useState<IFilters>({
    title: "",
    category: "",
    published: "",
  });
  const { title, category, published } = filters;

  const { articles, setArticles } = useArticles();

  const filteredArticles = useMemo(
    () =>
      articles
        .filter((article) => article.title.includes(title))
        .filter(
          (article) => article.category === Number(category) || category === ""
        )
        .filter(
          (article) =>
            published === FilterPublished.ALL ||
            (published === FilterPublished.PUBLISHED && article.published) ||
            (published === FilterPublished.DRAFT && !article.published)
        ),
    [articles, title, category, published]
  );

  const handleDelete = useCallback(
    async (id: number) => {
      setArticles((articles) =>
        articles.filter((article) => article.id !== id)
      );
      try {
        await removeArticle(id);
      } catch (error) {
        getArticles().then(setArticles);
      }
    },
    [setArticles]
  );

  return (
    <div>
      <Container header={<Link to="/article">Create new article</Link>}>
        <Filters filters={filters} setFilters={setFilters} />
        {filteredArticles.map((article) => (
          <Article key={article.id} article={article} onDelete={handleDelete} />
        ))}
        {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
        {/* {count % 2 === 0 && <Resize />} */}
      </Container>
      <Counter />
    </div>
  );
}

export default ArticlesPage;
