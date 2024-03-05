import { IArticle } from "../types/Article";

export async function getArticles(): Promise<IArticle[]> {
  const response = await fetch("http://localhost:3001/articles");
  const json = await response.json();
  return json;
}
