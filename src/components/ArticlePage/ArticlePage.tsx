import { useEffect, useState } from "react";
import { addArticle, getArticle, updateArticle } from "../../services/articles";
import { ICategory } from "../../types/Category";
import { IArticle, IArticleCreate } from "../../types/Article";
import { useNavigate, useParams } from "react-router-dom";
import ArticleForm from "../ArticleForm/ArticleForm";

interface IArticlePageProps {
  categories: ICategory[];
}

function ArticlePage(props: IArticlePageProps) {
  const { categories } = props;
  const [article, setArticle] = useState<IArticle | IArticleCreate>({
    title: "",
    category: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getArticle(id).then((article) => setArticle(article));
    }
  }, [id]);

  function handleChange(name: string, value: string) {
    setArticle({
      ...article,
      [name]: value,
    });
  }

  async function handleSubmit() {
    if (id) {
      await updateArticle(article as IArticle);
    } else {
      await addArticle(article as IArticleCreate);
    }
    navigate("/");
  }

  return (
    <ArticleForm
      categories={categories}
      article={article}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

export default ArticlePage;
