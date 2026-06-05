import { ReactNode } from "react";
import { Link } from "react-router";

type HeaderLinkProps = {
  children: ReactNode;
  to: string;
};

function HeaderLink({ children, to }: HeaderLinkProps) {
  return (
    <Link to={to} className="font-semibold text-white">
      {children}
    </Link>
  );
}

export default HeaderLink;
