import { useState } from "react";
import classNames from "classnames";
import { IArticle } from "../../types";
import "./styles.css";

interface IArticleProps {
  article: IArticle;
}

function Article(props: IArticleProps) {
  const { article } = props;
  const [selected, setSelected] = useState(false);

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
      <div>{article.category}</div>
      <div>{article.published ? "published" : "draft"}</div>
    </div>
  );
}

export default Article;
