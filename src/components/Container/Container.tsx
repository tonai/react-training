import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

function Container(props: IContainerProps) {
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {props.children}
    </div>
  );
}

export default Container;
