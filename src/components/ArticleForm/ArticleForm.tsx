import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../types/Category";
import { IArticle, IArticleCreate } from "../../types/Article";

interface IArticleFormProps {
  article: IArticleCreate | IArticle;
  categories: ICategory[];
  onChange: (name: string, value: string) => void;
  onSubmit: () => void;
}

function ArticleForm(props: IArticleFormProps) {
  const { article, categories, onChange, onSubmit } = props;
  const { title, category } = article;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    onChange(event.target.name, event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange} name="title" />
      <select value={category} onChange={handleChange} name="category" required>
        <option value=""></option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <input type="submit" />
      <Link to="/article/1">Edit article 1</Link>
    </form>
  );
}

export default ArticleForm;
