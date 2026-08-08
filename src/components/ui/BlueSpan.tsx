import { ReactNode } from "react";

type BlueSpanProps = {
  children: ReactNode;
  size?: "text-3xl" | "";
};

function BlueSpan({ children, size = "" }: BlueSpanProps) {
  return (
    <span className={`text-primary-color font-bold ${size}`}>{children}</span>
  );
}

export default BlueSpan;
