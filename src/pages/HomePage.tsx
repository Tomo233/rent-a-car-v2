import Header from "../components/layout/Header";
import Container from "../components/ui/Container";
import HeroSection from "../components/layout/HeroSection";
import RecommendedCars from "../features/cars/marketplace/RecommendedCars";
import HowWeWork from "../components/layout/HowWeWork";
import GetStarted from "../components/layout/GetStarted";

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
      </Container>
    </>
  );
}

export default HomePage;
