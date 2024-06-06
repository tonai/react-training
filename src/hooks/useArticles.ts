import { useEffect, useState } from "react";
import { IArticle } from "../types";
import { getArticles } from "../services/article";

export function useArticles() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
    getArticles().then((json) => setArticles(json));
  }, []);
  return articles;
}
