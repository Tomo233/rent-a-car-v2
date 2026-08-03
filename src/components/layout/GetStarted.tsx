import BlueSpan from "../ui/BlueSpan";
import LanguageIcon from "@mui/icons-material/Language";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FeatureCard from "./FeaturedCard";
import LaptopImage from "../../assets/laptop.png";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
const mainFeaturesData = [
  {
    id: 1,
    icon: DirectionsCarFilledIcon,
    title: "Wide Selection",
    description: "Choose from compact to luxury vehicles.",
  },
  {
    id: 2,
    icon: GppGoodIcon,
    title: "Best Prices",
    description: "Transparent pricing with no hidden fees.",
  },
  {
    id: 3,
    icon: CalendarMonthIcon,
    title: "Easy Booking",
    description: "Book in minutes with a simple process.",
  },
] as const;

const trustPerksData = [
  {
    id: 1,
    icon: GppGoodIcon,
    title: "Secure Booking",
    description: "Your data and payments are protected with top security.",
  },
  {
    id: 2,
    icon: DoDisturbIcon,
    title: "Free Cancellation",
    description: "Cancel or modify your booking with flexible options.",
  },
  {
    id: 3,
    icon: ThumbUpOffAltIcon,
    title: "Trusted by Thousands",
    description:
      "Join thousands of happy customers who travel with confidence.",
  },
] as const;

function GetStarted() {
  return (
    <section className="mx-2 mt-32 rounded-lg border border-gray-300 px-3 pb-8 sm:mx-0 sm:px-8">
      <div className="items-center justify-between lg:flex">
        <div className="grid gap-y-14">
          <div className="mt-10 flex h-9 w-36 items-center gap-2 rounded-lg bg-slate-200 pl-1">
            <LanguageIcon fontSize="small" className="text-primary-color" />
            <span className="text-primary-color text-sm font-bold">
              Web Platform
            </span>
          </div>
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl sm:tracking-wide">
              Get Started With Our <BlueSpan>Website</BlueSpan>
            </h2>
            <p className="mt-2 max-w-xl text-base font-medium tracking-wide text-slate-500">
              Access our full car rental platform directly in your browser.
              Browse cars, compare prices and book your perfect ride in just a
              few clicks.
            </p>
          </div>
          <div className="row-start-4 flex flex-col items-center gap-5 place-self-center sm:flex-row lg:row-start-3 lg:place-self-start">
            <button className="bg-primary-color cursor-pointer rounded-xl px-12 py-4 font-medium text-white">
              Browse Cars
            </button>
            <button className="cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-12 py-4 font-medium">
              Learn More
            </button>
          </div>
          <div className="flex justify-between gap-5">
            {mainFeaturesData.map(({ icon, title, description }) => (
              <FeatureCard
                key={Math.random()}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        <img
          src={LaptopImage}
          className="hidden h-auto max-w-md pr-3 lg:block lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl"
          alt=""
        />
      </div>
      <div className="mt-10 flex justify-between gap-3 rounded-md border border-slate-300 bg-slate-50 px-3 py-8">
        {trustPerksData.map(({ icon, title, description }) => (
          <FeatureCard
            key={Math.random()}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}

export default GetStarted;
