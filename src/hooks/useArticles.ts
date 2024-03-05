import { useEffect, useState } from "react";
import { IArticle } from "../types/Article";
import { getArticles } from "../services/articles";

export function useArticles(): IArticle[] {
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
    // getArticles().then((json) => setArticles(json));
    getArticles().then(setArticles);
  }, []);
  return articles;
}
