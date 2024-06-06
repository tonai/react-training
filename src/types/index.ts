export interface IArticle {
  id: number;
  title: string;
  category: number;
  published: boolean;
  content: string;
}

export interface ICategory {
  id: number;
  title: string;
}
