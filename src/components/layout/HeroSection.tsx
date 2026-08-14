import Road from "../../assets/road.png";
import LockIcon from "@mui/icons-material/Lock";

function HeroSection() {
  return (
    <section className="mx-2">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-3/4 bg-linear-to-b via-white/25 to-transparent md:hidden" />
      <img
        src={Road}
        alt="Road"
        className="absolute top-0 left-0 -z-10 h-full max-h-160 w-full object-cover object-left sm:object-center"
      />

      <div className="mt-24 grid place-items-center gap-3 sm:gap-5 md:mt-20 md:max-w-125 md:place-items-start xl:max-w-2/5">
        <h1 className="text-center text-4xl font-bold text-black md:text-start md:text-5xl lg:text-6xl">
          Cruise into Your Perfect Ride
        </h1>
        <p className="max-w-md text-center font-semibold tracking-wide text-black sm:text-lg md:max-w-full md:text-start md:text-xl md:font-medium">
          TL-rent connects renters and car owners for smooth, reliable and
          secure car rentals.
        </p>
        <button className="bg-primary-color cursor-pointer rounded-md px-18 py-3 font-medium text-white shadow-md">
          Open TL-rent
        </button>
        <div className="flex items-center gap-3">
          <LockIcon className="text-black" />
          <p className="text-sm font-bold tracking-wide text-black sm:text-base">
            Secure. Simple. Tailored for your ride.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
