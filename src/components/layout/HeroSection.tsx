import Road from "../../assets/road.jpg";
import BlueSpan from "../ui/BlueSpan";
import SearchCars from "../../features/cars/marketplace/SearchCars";

function HeroSection() {
  return (
    <section>
      <img
        src={Road}
        alt="Road"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      />

      <div className="grid place-items-center gap-3 pt-10 sm:pt-24 md:pt-28 lg:pt-56">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Cruise into Your Perfect Ride
        </h1>
        <p className="w-3/4 text-center tracking-wide text-white sm:pb-0 sm:text-lg md:text-xl xl:w-1/2">
          Want more choices and exclusive deals?
          <BlueSpan> Create an account </BlueSpan> or
          <BlueSpan> Log in </BlueSpan>
          now to explore our complete, diverse fleet and enjoy the full
          convenience and reliability of booking your next journey with us.
        </p>
        <button className="bg-secondary-color hidden cursor-pointer rounded-lg px-24 py-2.5 font-medium text-white shadow-md sm:block">
          Join Us
        </button>
      </div>
      <SearchCars />
    </section>
  );
}

export default HeroSection;
