import Logo from "../ui/Logo";
import HeaderLink from "../ui/HeaderLink";

function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex items-center justify-center gap-10">
        <HeaderLink to="#">About Us</HeaderLink>
        <HeaderLink to="#">Help</HeaderLink>

        <Logo />

        <HeaderLink to="#">Cars List</HeaderLink>

        <div className="flex items-center gap-3">
          <button className="cursor-pointer border-r pr-3 text-white">
            Login
          </button>
          <button className="h-8 w-24 cursor-pointer rounded-2xl border border-white text-white">
            Join us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
