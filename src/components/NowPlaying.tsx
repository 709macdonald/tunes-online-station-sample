
import { Music, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const NowPlaying = () => {
  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Now Playing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Music className="w-24 h-24 text-white" />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Electric Dreams</h3>
              <p className="text-xl text-purple-300 mb-4">by Synthwave Collective</p>
              <p className="text-gray-400 mb-6">Album: Neon Nights • Released: 2024</p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden min-w-48">
                  <div className="w-1/3 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000"></div>
                </div>
                <span className="text-sm text-gray-400">1:23 / 3:45</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
