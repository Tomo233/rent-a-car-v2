import { ComponentPropsWithoutRef } from "react";

function SearchInput({ ...otherProps }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...otherProps}
      className="focus:border-primary-color focus:ring-primary-color h-9 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-center text-white scheme-dark focus:ring-1 focus:outline-none sm:h-10"
    />
  );
}

export default SearchInput;
