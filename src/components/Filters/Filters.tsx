import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { ICategory } from "../../types";

interface IFilters {
  title: string;
  category: string;
}

interface IFiltersProps {
  categories: ICategory[];
  // title: string;
  // setTitle: (title: string) => void;
  // category: string;
  // setCategory: (category: string) => void;
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

function Filters(props: IFiltersProps) {
  const { categories, filters, setFilters } = props;
  const { title, category } = filters;
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef.current?.focus(), [inputRef]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const newFilters = { ...filters };
    newFilters[event.target.name as keyof IFilters] = event.target.value;
    setFilters(newFilters);
    // Or
    // setFilters({
    //   ...filters,
    //   [event.target.name as keyof IFilters]: event.target.value,
    // });
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={title}
        onChange={handleChange}
        name="title"
      />
      <select value={category} onChange={handleChange} name="category">
        <option value=""></option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
