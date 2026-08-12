import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="block bg-transparent pt-6">
      <Container>
        <div className="flex items-center justify-between gap-10">
          <div className="items-center sm:flex sm:gap-10">
            <Logo color="white" />
            <Navigation textShade={200} />
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button className="cursor-pointer rounded-md border border-white px-8 py-2 text-center font-semibold text-white">
              Login
            </button>
            <button className="bg-primary-color hidden cursor-pointer rounded-md px-8 py-2 font-medium text-white shadow-md sm:block">
              Join Us
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
