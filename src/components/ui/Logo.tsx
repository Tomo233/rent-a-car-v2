import { NavLink } from "react-router";
import CarLogo from "../../assets/car.png";

function Logo() {
  return (
    <NavLink to="/">
      <img src={CarLogo} alt="Car Logo" />
    </NavLink>
  );
}

export default Logo;
