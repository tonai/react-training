import { ReactNode } from "react";
import css from "./Container.module.scss";

interface IContainerProps {
  children: ReactNode;
  header: ReactNode;
}

function Container(props: IContainerProps) {
  const { children, header } = props;
  return (
    <div className={css["Container"]}>
      <div>{header}</div>
      <div>{children}</div>
    </div>
  );
}

export default Container;
