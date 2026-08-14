import Container from "../ui/Container";
import Logo from "../ui/Logo";
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="mx-1 block bg-transparent pt-6">
      <Container>
        <div className="flex items-center justify-between gap-10 sm:justify-center md:justify-between">
          <div className="items-center sm:flex sm:gap-10">
            <Logo color="white" />
            <Navigation textShade={50} />
          </div>

          <HamburgerMenu />
          <div className="hidden items-center gap-3 sm:flex">
            <button className="cursor-pointer rounded-md border border-white px-6 py-1.5 text-center font-semibold text-white lg:px-8">
              Login
            </button>
            <button className="bg-primary-color hidden cursor-pointer rounded-md px-6 py-2 font-medium text-white shadow-md sm:block lg:px-8">
              Join Us
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
