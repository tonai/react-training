import Article from "../Article/Article";

function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      category: "blog",
      published: true,
      content: "Lorem ipsum",
    },
    {
      id: 2,
      title: "Article 2",
      category: "news",
      published: true,
      content: "Lorem ipsum",
    },
    {
      id: 3,
      title: "Article 3",
      category: "blog",
      published: false,
      content: "Lorem ipsum",
    },
  ];
  return (
    <div>
      {articles.map((art) => (
        <Article key={art.id} article={art} />
      ))}
    </div>
  );
}

export default ArticleList;
