import Logo from "../ui/Logo";
import HeaderLink from "../ui/HeaderLink";
import HamburgerMenu from "./HamburgerMenu";
import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <header className="block bg-black pt-5">
      <div className="container mx-auto flex items-center justify-between gap-10">
        <div className="items-center sm:flex sm:gap-5">
          <Logo />
          <nav className="hidden items-center sm:flex sm:gap-6">
            <HeaderLink to="#">Cars List</HeaderLink>
            <HeaderLink to="#">About Us</HeaderLink>
            <HeaderLink to="#">Help</HeaderLink>
          </nav>
        </div>

        <HamburgerMenu />

        <ProfileMenu />

        {/* <div className="hidden items-center gap-3 sm:flex">
          <button className="cursor-pointer border-r pr-3 font-semibold text-white">
            Login
          </button>
          <button className="h-8 w-28 cursor-pointer rounded-2xl border border-white font-semibold text-white">
            Join us
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
