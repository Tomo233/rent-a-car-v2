import Road from "../../assets/road.jpg";
import BlueSpan from "../ui/BlueSpan";

function HeroSection() {
  return (
    <div>
      <img
        src={Road}
        alt="Road"
        className="absolute top-0 -z-10 h-full max-h-150 w-full object-cover lg:max-h-200"
      />
      <div className="grid place-items-center pt-20 md:pt-28 lg:pt-56">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Cruise into Your Perfect Ride
        </h1>
        <p className="w-3/4 py-5 text-center tracking-wide text-white md:text-xl xl:w-1/2">
          Welcome to our car <BlueSpan>rental application</BlueSpan>, where
          finding your ideal <BlueSpan>vehicle</BlueSpan> is effortless. With a
          diverse selection of cars ranging from <BlueSpan>compact</BlueSpan> to{" "}
          <BlueSpan>luxury</BlueSpan>, we cater to every traveler's needs.
          Experience convenience and reliability as you embark on your next
          journey with us.
        </p>
        <button className="bg-button-color cursor-pointer px-24 py-3 font-semibold text-white">
          Join Us
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
