import Header from "../components/layout/Header";
import Container from "../components/ui/Container";
import HeroSection from "../components/layout/HeroSection";
import RecommendedCars from "../features/cars/marketplace/RecommendedCars";
import HowWeWork from "../components/layout/HowWeWork";
import GetStarted from "../components/layout/GetStarted";
import FaqSection from "../components/layout/FaqSection";

function HomePage() {
  return (
    <>
      <div className="relative h-200">
        <Header />
        <Container>
          <HeroSection />
        </Container>
      </div>
      <Container>
        <RecommendedCars />
        <HowWeWork />
        <GetStarted />
        <FaqSection />
      </Container>
    </>
  );
}

export default HomePage;
