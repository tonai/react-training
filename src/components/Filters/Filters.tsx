import { ChangeEvent, Dispatch, SetStateAction } from "react";

export enum FilterPublished {
  ALL = "",
  PUBLISHED = "published",
  DRAFT = "draft",
}

interface IFiltersProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  published: string;
  setPublished: Dispatch<SetStateAction<string>>;
}

function Filters(props: IFiltersProps) {
  const { title, setTitle, category, setCategory, published, setPublished } =
    props;

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }

  function handlePublishedChange(event: ChangeEvent<HTMLInputElement>) {
    setPublished(event.target.value);
  }

  return (
    <div>
      <input value={title} onChange={handleTitleChange} />
      <select value={category} onChange={handleCategoryChange}>
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
          onChange={handlePublishedChange}
        />
      </label>
      <label>
        Published:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.PUBLISHED}
          checked={published === FilterPublished.PUBLISHED}
          onChange={handlePublishedChange}
        />
      </label>
      <label>
        Draft:{" "}
        <input
          type="radio"
          name="published"
          value={FilterPublished.DRAFT}
          checked={published === FilterPublished.DRAFT}
          onChange={handlePublishedChange}
        />
      </label>
    </div>
  );
}

export default Filters;
