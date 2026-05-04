import HeroSection from "./HeroSection";
import ServicesOverview from "./Servicesoverview";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;