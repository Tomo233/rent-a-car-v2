import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="block bg-transparent pt-6">
      <Container>
        <div className="flex items-center justify-between gap-10">
          <div className="items-center sm:flex sm:gap-5">
            <Logo />
            <Navigation textShade={200} />
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button className="cursor-pointer border-r pr-3 font-semibold text-white">
              Login
            </button>
            <button className="h-8 w-28 cursor-pointer rounded-2xl border border-white font-semibold text-white">
              Join us
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
