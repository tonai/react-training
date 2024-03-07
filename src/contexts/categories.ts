import { createContext } from "react";
import { ICategory } from "../types/Category";

export const categoriesContext = createContext<ICategory[]>([]);
