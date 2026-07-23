import BlueSpan from "../../../components/ui/BlueSpan";
import SectionDivider from "../../../components/ui/SectionDivider";
import CarCarousel from "./CarCarousel";

function RecommendedCars() {
  return (
    <div>
      <SectionDivider>
        <BlueSpan>Recommended</BlueSpan> Cars
      </SectionDivider>
      <CarCarousel />
    </div>
  );
}

export default RecommendedCars;
