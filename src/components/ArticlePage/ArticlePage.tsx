import { ChangeEvent, FormEvent, useState } from "react";
import { addArticle } from "../../services/articles";
import { ICategory } from "../../types/Category";

interface IArticlePageProps {
  categories: ICategory[];
}

function ArticlePage(props: IArticlePageProps) {
  const { categories } = props;
  const [article, setArticle] = useState({
    title: "",
    category: "",
  });
  const { title, category } = article;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addArticle(article);
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
    </form>
  );
}

export default ArticlePage;
