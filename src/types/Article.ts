export interface IArticle {
  id: number;
  title: string;
  category: number;
  published: boolean;
  content: string;
}

export interface IArticleCreate {
  title: string;
  category: string;
  published?: boolean;
  content?: string;
}
