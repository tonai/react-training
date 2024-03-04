import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const element = <div>Hello world</div>;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>{element}</StrictMode>
);
