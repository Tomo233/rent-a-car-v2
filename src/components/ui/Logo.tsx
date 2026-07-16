import { NavLink } from "react-router";
import CarLogo from "../../assets/car.png";

function Logo() {
  return (
    <NavLink to="/">
      <img src={CarLogo} className="w-20" alt="Car Logo" />
    </NavLink>
  );
}

export default Logo;
