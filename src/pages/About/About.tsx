import CompanySection from "./CompanySection";
import FounderSection from "./FounderSection";
import MissionVisionSection from "./MissionVisionSection";
import TeamSection from "./TeamSection";

// Add these Google Fonts to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Lora&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

const About = () => {
  return (
    <main>
      <CompanySection />
      <FounderSection />
      <MissionVisionSection />
      <TeamSection />
    </main>
  );
};

export default About;