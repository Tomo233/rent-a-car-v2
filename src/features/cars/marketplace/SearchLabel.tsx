import { ReactNode } from "react";

function SearchLabel({ children }: { children: ReactNode }) {
  return (
    <label className="text-sm font-medium text-slate-200">{children}</label>
  );
}

export default SearchLabel;
