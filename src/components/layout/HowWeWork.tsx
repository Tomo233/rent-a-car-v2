import BlueSpan from "../ui/BlueSpan";
import SupportAvatar from "../../assets/support.png";
import TimeImage from "../../assets/time.png";
import CarKeys from "../../assets/car-keys.png";

const STEPS_DATA = [
  {
    id: "fleet-selection",
    image: SupportAvatar,
    imageWidthClass: "w-28",
    alt: "Customized Fleet Selection Support Avatar",
    title: "Customized Fleet Selection",
    description:
      "We boast a diverse array of vehicles meticulously curated to cater to your exacting requirements. Whether your itinerary involves urban exploration, family excursions, or corporate endeavors, we guarantee the ideal vehicle awaits you. Our fleet receives regular updates featuring the latest models, promising unparalleled comfort and enjoyment with every ride.",
  },
  {
    id: "customer-support",
    image: TimeImage,
    imageWidthClass: "w-36",
    alt: "Outstanding Customer Support Clock Icon",
    title: "Outstanding Customer Support",
    description:
      "Your rental journey with us is underpinned by unparalleled support and service. From your initial inquiry to the conclusion of your rental period, our dedicated team remains at your beck and call. Whether you seek guidance with reservations or encounter queries during your rental tenure, our commitment to seamless assistance ensures your satisfaction at every turn.",
  },
  {
    id: "pricing",
    image: CarKeys,
    imageWidthClass: "w-32",
    alt: "Transparent and Flexible Pricing Car Keys",
    title: "Transparent & Flexible Pricing",
    description:
      "We uphold a commitment to clarity and flexibility, setting the benchmark for straightforward pricing. Bid farewell to hidden costs and unexpected surprises with our competitive and transparent pricing structure. Our adaptable rental options are tailored to accommodate your schedule and budgetary constraints, affording you the convenience of stress-free car rentals.",
  },
] as const;

function HowWeWork() {
  return (
    <section className="mt-32">
      <div className="mb-8 flex w-full items-center justify-center">
        <div className="border-t border-gray-300 sm:w-36"></div>

        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          How We <BlueSpan>Work</BlueSpan>
        </h2>

        <div className="border-t border-gray-300 sm:grow"></div>
      </div>

      <div className="grid grid-cols-1 place-items-center items-baseline md:grid-cols-3 md:gap-2">
        {STEPS_DATA.map((step) => (
          <div key={step.id} className="mt-7.5 w-full max-w-100">
            <img
              src={step.image}
              alt={step.alt}
              className={`mx-auto w-24 ${step.imageWidthClass}`}
            />
            <h3 className="my-2.5 text-center text-xl font-semibold text-slate-800">
              {step.title}
            </h3>
            <p className="text-center text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 h-px w-full bg-slate-300" />
    </section>
  );
}

export default HowWeWork;
