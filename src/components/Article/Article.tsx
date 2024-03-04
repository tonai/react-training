import { useState } from "react";
import classNames from "classnames";
import { IArticle } from "../../types/Article";
import "./Article.css";
import { ICategory } from "../../types/Category";

export interface IArticleProps {
  article: IArticle;
  categories: ICategory[];
}

function Article(props: IArticleProps) {
  const { article, categories } = props;
  const { category: categoryId, published, title } = article;
  const [isSelected, setIsSelected] = useState(false);
  const category = categories.find((category) => category.id === categoryId);

  function handleClick() {
    setIsSelected(!isSelected);
  }

  return (
    <div
      className={classNames("Article", { isSelected })}
      onClick={handleClick}
    >
      <div>{title}</div>
      <div>{category?.title}</div>
      <div>{published ? "published" : "draft"}</div>
    </div>
  );
}

export default Article;
