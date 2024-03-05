import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { ICategory } from "../../types/Category";

export enum FilterPublished {
  ALL = "",
  PUBLISHED = "published",
  DRAFT = "draft",
}

export interface IFilters {
  title: string;
  category: string;
  published: string;
}

interface IFiltersProps {
  categories: ICategory[];
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

function Filters(props: IFiltersProps) {
  const { categories, filters, setFilters } = props;
  const { category, published, title } = filters;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // function handleChange(
  //   event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) {
  //   setFilters({
  //     ...filters,
  //     [event.target.name as keyof IFilters]: event.target.value,
  //   });
  // }

  function handleChange(name: keyof IFilters) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFilters({
        ...filters,
        [name]: event.target.value,
      });
    };
  }

  return (
    <div>
      <input value={title} onChange={handleChange("title")} ref={inputRef} />
      <select value={category} onChange={handleChange("category")}>
        <option value=""></option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <label>
        All:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.ALL}
          checked={published === FilterPublished.ALL}
          onChange={handleChange("published")}
        />
      </label>
      <label>
        Published:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.PUBLISHED}
          checked={published === FilterPublished.PUBLISHED}
          onChange={handleChange("published")}
        />
      </label>
      <label>
        Draft:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.DRAFT}
          checked={published === FilterPublished.DRAFT}
          onChange={handleChange("published")}
        />
      </label>
    </div>
  );
}

export default Filters;
