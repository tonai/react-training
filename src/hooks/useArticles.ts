import { useEffect, useState } from "react";
import { IArticle } from "../types/Article";

export function useArticles(): IArticle[] {
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((response) => response.json())
      .then((json) => setArticles(json));
  }, []);
  return articles;
}
