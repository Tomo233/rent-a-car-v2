import { ReactNode } from "react";

function BlueSpan({ children }: { children: ReactNode }) {
  return <span className="text-primary-color font-bold">{children}</span>;
}

export default BlueSpan;
