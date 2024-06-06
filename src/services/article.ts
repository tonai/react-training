import { IArticle } from "../types";

export function getArticles(): Promise<IArticle[]> {
  return fetch("http://localhost:3001/articles").then((response) =>
    response.json(),
  );
}
