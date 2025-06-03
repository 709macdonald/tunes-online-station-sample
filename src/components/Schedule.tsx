
const Schedule = () => {
  const programs = [
    { time: "06:00 - 09:00", show: "Morning Pulse", dj: "Alex Rivera", genre: "Pop & Chart Hits" },
    { time: "09:00 - 12:00", show: "Coffee Beats", dj: "Sarah Chen", genre: "Indie & Alternative" },
    { time: "12:00 - 15:00", show: "Lunch Mix", dj: "DJ Mike", genre: "Electronic & House" },
    { time: "15:00 - 18:00", show: "Drive Time", dj: "Emma Stone", genre: "Rock & Classic Hits" },
    { time: "18:00 - 21:00", show: "Evening Vibes", dj: "Carlos Martinez", genre: "R&B & Soul" },
    { time: "21:00 - 00:00", show: "Night Sessions", dj: "Luna Park", genre: "Ambient & Chill" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Today's Schedule</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-bold text-purple-400 min-w-32">
                    {program.time}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{program.show}</h3>
                    <p className="text-gray-400">with {program.dj}</p>
                  </div>
                </div>
                <div className="bg-purple-500/20 px-4 py-2 rounded-full">
                  <span className="text-purple-300 text-sm font-medium">{program.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
