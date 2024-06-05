import { useState } from "react";
import Article from "../Article/Article";
import Resize from "../Resize/Resize";
import { useArticles } from "../../hooks/useArticles";
import Filters from "../Filters/Filters";

function ArticleList() {
  const articles = useArticles();
  const [count, setCount] = useState(0);

  return (
    <div>
      <Filters />
      {articles.map((art) => (
        <Article key={art.id} article={art} />
      ))}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {count % 2 === 0 ? <Resize /> : null}
    </div>
  );
}

export default ArticleList;
