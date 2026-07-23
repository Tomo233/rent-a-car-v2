import { ReactNode } from "react";

function SectionDivider({ children }: { children: ReactNode }) {
  return (
    <div className="mt-20 mb-5 flex w-full items-center justify-center">
      <div className="flex-1 border-t border-gray-300"></div>

      <h2 className="shrink-0 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:tracking-wider">
        {children}
      </h2>

      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  );
}

export default SectionDivider;
