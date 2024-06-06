import { ICategory } from "../types";

export function getCategories(): Promise<ICategory[]> {
  return fetch("http://localhost:3001/categories").then((response) =>
    response.json(),
  );
}
