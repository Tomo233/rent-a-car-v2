import Header from "../components/layout/Header";
import HeroSection from "../components/layout/HeroSection";
import Container from "../components/ui/Container";

function HomePage() {
  return (
    // <div className="relative mb-[500px]">
    <div className="relative mb-125 h-200">
      <Header />
      <Container>
        <HeroSection />
      </Container>
    </div>
    // </div>
  );
}

export default HomePage;
