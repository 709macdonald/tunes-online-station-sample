
import { Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const DJProfiles = () => {
  const djs = [
    {
      name: "Alex Rivera",
      show: "Morning Pulse",
      bio: "Starting your day with energy and positivity. 10+ years of radio experience.",
      image: "AR",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Sarah Chen",
      show: "Coffee Beats",
      bio: "Indie music enthusiast bringing you the best underground sounds.",
      image: "SC",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "DJ Mike",
      show: "Lunch Mix",
      bio: "Electronic music producer and DJ with a passion for house beats.",
      image: "DM",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Emma Stone",
      show: "Drive Time",
      bio: "Rock enthusiast keeping the classics alive with modern hits.",
      image: "ES",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Meet Our DJs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {djs.map((dj, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className={`w-24 h-24 bg-gradient-to-r ${dj.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg`}>
                {dj.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{dj.name}</h3>
              <p className="text-purple-300 font-medium mb-3">{dj.show}</p>
              <p className="text-gray-400 text-sm mb-6">{dj.bio}</p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 p-2">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJProfiles;
