
import Hero from "../components/Hero";
import NowPlaying from "../components/NowPlaying";
import Schedule from "../components/Schedule";
import DJProfiles from "../components/DJProfiles";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Hero />
      <NowPlaying />
      <Schedule />
      <DJProfiles />
      <Footer />
    </div>
  );
};

export default Index;
