
import { Play, Pause, Volume2, Radio } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <Radio className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          PULSE FM
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
          Your Beats, Your Vibe, Your Station
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isPlaying ? (
              <>
                <Pause className="w-6 h-6 mr-2" />
                Pause Live Stream
              </>
            ) : (
              <>
                <Play className="w-6 h-6 mr-2" />
                Play Live Stream
              </>
            )}
          </Button>
          
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
            <Volume2 className="w-5 h-5 text-white" />
            <div className="w-24 h-2 bg-gray-600 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-400 animate-fade-in delay-500">
          <span className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            LIVE • 24/7 Non-Stop Music
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
