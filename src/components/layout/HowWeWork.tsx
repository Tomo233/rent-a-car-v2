import WideSelectionImage from "../../assets/wide-selection.png";
import SecuredImage from "../../assets/secured.png";
import PricingImage from "../../assets/pricing.png";
import EasyImage from "../../assets/easy.png";

const STEPS_DATA = [
  {
    id: "wide-selection",
    image: WideSelectionImage,
    alt: "Wide Selection Icon",
    title: "Wide Selection",
    description:
      "Choose from a variety of vehicles that fit your needs and budget.",
  },
  {
    id: "trusted-secure",
    image: SecuredImage,
    alt: "Trusted & Secure Icon",
    title: "Trusted & Secure",
    description: "Verified owners, secure payments and 24/7 customer support.",
  },
  {
    id: "great-prices",
    image: PricingImage,
    alt: "Great Prices Icon",
    title: "Great Prices",
    description: "Enjoy competitive prices and transparent rental terms.",
  },
  {
    id: "easy-flexible",
    image: EasyImage,
    alt: "Easy & Flexible Icon",
    title: "Easy & Flexible",
    description:
      "Book online in minutes with flexible pick-up and return options.",
  },
] as const;

function HowWeWork() {
  return (
    <section>
      <div className="mt-10 grid grid-cols-1 place-items-center items-baseline gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS_DATA.map((step) => (
          <div key={step.id} className="max-w-50">
            <img src={step.image} alt={step.alt} className="mx-auto w-20" />
            <h3 className="pt-3 pb-1 text-center text-xl font-semibold text-slate-800">
              {step.title}
            </h3>
            <p className="text-center text-sm leading-relaxed font-medium tracking-wide">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowWeWork;
