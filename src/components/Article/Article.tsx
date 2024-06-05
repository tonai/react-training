import "./styles.css";

interface IArticle {
  id: number;
  title: string;
  category: string;
  published: boolean;
  content: string;
}

interface IArticleProps {
  article: IArticle;
}

function Article(props: IArticleProps) {
  const { article } = props;
  return (
    <div className="article">
      <div>{article.title}</div>
      <div>{article.category}</div>
      <div>{article.published ? "published" : "draft"}</div>
    </div>
  );
}

export default Article;
