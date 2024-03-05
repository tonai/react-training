import { ReactNode } from "react";
import "./Container.css";

interface IContainerProps {
  children: ReactNode;
  header: ReactNode;
}

function Container(props: IContainerProps) {
  const { children, header } = props;
  return (
    <div className="Container">
      <div>{header}</div>
      <div>{children}</div>
    </div>
  );
}

export default Container;
