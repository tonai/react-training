import { useEffect } from "react";

function Resize() {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>Resize</div>;
}

export default Resize;
