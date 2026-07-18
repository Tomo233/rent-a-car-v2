import Header from "../components/layout/Header";
import HeroSection from "../components/layout/HeroSection";
import HowWeWork from "../components/layout/HowWeWork";
import Container from "../components/ui/Container";

function HomePage() {
  return (
    <>
      <div className="relative h-200">
        <Header />
        <Container>
          <HeroSection />
        </Container>
      </div>
      <HowWeWork />
    </>
  );
}

export default HomePage;
