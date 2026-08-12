import { NavLink } from "react-router";
import BlackLogo from "../../assets/black-logo.png";
import WhiteLogo from "../../assets/white-logo.png";

function Logo({ color }: { color: "white" | "black" }) {
  return (
    <NavLink to="/" className="flex items-center gap-3">
      <img
        src={color === "white" ? WhiteLogo : BlackLogo}
        className="w-14"
        alt="Car Logo"
      />
      <span
        className={`text-lg font-semibold ${color === "white" ? "text-white" : "text-black"}`}
      >
        TL-rent
      </span>
    </NavLink>
  );
}

export default Logo;
