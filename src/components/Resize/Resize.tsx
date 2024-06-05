import { useResize } from "../../hooks/useResize";

function Resize() {
  const width = useResize();
  return <div>{width}</div>;
}

export default Resize;
