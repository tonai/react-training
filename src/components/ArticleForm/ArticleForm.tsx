import { ChangeEvent, FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { IArticle, IArticleCreate } from "../../types/Article";
import { categoriesContext } from "../../contexts/categories";

interface IArticleFormProps {
  article: IArticleCreate | IArticle;
  onChange: (name: string, value: string) => void;
  onSubmit: () => void;
}

function ArticleForm(props: IArticleFormProps) {
  const { article, onChange, onSubmit } = props;
  const categories = useContext(categoriesContext);
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
