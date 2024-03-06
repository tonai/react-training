import { useState } from "react";
import classNames from "classnames";
import { IArticle } from "../../types/Article";
import "./Article.css";
import { ICategory } from "../../types/Category";
import { Link } from "react-router-dom";

export interface IArticleProps {
  article: IArticle;
  categories: ICategory[];
  onDelete: (id: number) => void;
}

function Article(props: IArticleProps) {
  const { article, categories, onDelete } = props;
  const { category: categoryId, id, published, title } = article;
  const [isSelected, setIsSelected] = useState(false);
  const category = categories.find((category) => category.id === categoryId);

  function handleClick() {
    setIsSelected(!isSelected);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div
      className={classNames("Article", { isSelected })}
      onClick={handleClick}
    >
      <div>{title}</div>
      <div>{category?.title}</div>
      <div>{published ? "published" : "draft"}</div>
      <div>
        <Link to={`/article/${id}`}>Edit</Link>
      </div>
      <div>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Article;
