import { ChangeEvent, useState } from "react";

function Filters() {
  const [title, setTitle] = useState("aaaaaaaaaaaaaaaa");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input value={title} onChange={handleChange} />
    </div>
  );
}

export default Filters;
