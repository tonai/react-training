import { useState } from "react";
import classNames from "classnames";
import { IArticle, ICategory } from "../../types";
import "./styles.css";

interface IArticleProps {
  article: IArticle;
  categories: ICategory[];
}

function Article(props: IArticleProps) {
  const { article, categories } = props;
  const [selected, setSelected] = useState(false);
  const category = categories.find((cat) => cat.id === article.category);

  function handleClick() {
    setSelected(!selected);
    // setSelected((selected) => !selected);
  }

  return (
    <div
      className={classNames("article", { "is-selected": selected })}
      onClick={handleClick}
    >
      <div>{article.title}</div>
      <div>{category?.title}</div>
      <div>{article.published ? "published" : "draft"}</div>
    </div>
  );
}

export default Article;
