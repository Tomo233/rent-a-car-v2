import BlueSpan from "../../../components/ui/BlueSpan";
import SectionDivider from "../../../components/ui/SectionDivider";
import CarCarousel from "./CarCarousel";

function RecommendedCars() {
  return (
    <section>
      <SectionDivider>
        <BlueSpan>Recommended</BlueSpan> Cars
      </SectionDivider>
      <CarCarousel />
    </section>
  );
}

export default RecommendedCars;
