import { NavHashLink } from "react-router-hash-link";

export const navLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "About Us", href: "/#about-us" },
  { label: "Help", href: "/#help" },
] as const;

function Navigation({ textShade }: { textShade: 50 | 950 }) {
  return (
    <nav className="hidden items-center sm:flex sm:gap-6">
      {navLinks.map(({ label, href }) => (
        <NavHashLink
          to={href}
          smooth
          key={href}
          className={`font-semibold outline-0 ${textShade == 50 ? "text-slate-50" : "text-slate-950"} `}
        >
          {label}
        </NavHashLink>
      ))}
    </nav>
  );
}

export default Navigation;
