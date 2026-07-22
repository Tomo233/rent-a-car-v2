import { ReactNode } from "react";

function SectionDivider({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex w-full items-center justify-center">
      <div className="flex-1 border-t border-gray-300"></div>

      <h2 className="shrink-0 text-center text-4xl font-bold text-slate-900">
        {children}
      </h2>

      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  );
}

export default SectionDivider;
