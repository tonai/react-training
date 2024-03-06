import { IArticle, IArticleCreate } from "../types/Article";

export async function getArticles(): Promise<IArticle[]> {
  const response = await fetch("http://localhost:3001/articles");
  const json = await response.json();
  return json;
}

export function addArticle(article: IArticleCreate): Promise<IArticle> {
  return fetch("http://localhost:3001/articles", {
    body: JSON.stringify({ ...article, category: Number(article.category) }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  }).then((data) => data.json());
}

export function getArticle(id: string) {
  return fetch(`http://localhost:3001/articles/${id}`).then((data) =>
    data.json()
  );
}

export function updateArticle(article: IArticle) {
  return fetch(`http://localhost:3001/articles/${article.id}`, {
    body: JSON.stringify({ ...article, category: Number(article.category) }),
    headers: { "Content-Type": "application/json" },
    method: "PUT",
  }).then((data) => data.json());
}

export function removeArticle(id: number) {
  return fetch(`http://localhost:3001/articles/${id}`, {
    method: "DELETE",
  }).then((data) => data.json());
}
