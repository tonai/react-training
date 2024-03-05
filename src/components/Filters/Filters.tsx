import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

function Filters(props: IFiltersProps) {
  const { filters, setFilters } = props;
  const { category, published, title } = filters;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const clone = { ...filters };
    clone[event.target.name as keyof IFilters] = event.target.value;
    setFilters(clone);
  }

  return (
    <div>
      <input value={title} onChange={handleChange} name="title" />
      <select value={category} onChange={handleChange} name="category">
        <option value=""></option>
        <option value="1">News</option>
        <option value="2">Blog post</option>
      </select>
      <label>
        All:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.ALL}
          checked={published === FilterPublished.ALL}
          onChange={handleChange}
        />
      </label>
      <label>
        Published:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.PUBLISHED}
          checked={published === FilterPublished.PUBLISHED}
          onChange={handleChange}
        />
      </label>
      <label>
        Draft:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.DRAFT}
          checked={published === FilterPublished.DRAFT}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Filters;
