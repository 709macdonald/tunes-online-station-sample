
import { Radio, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">PULSE FM</span>
            </div>
            <p className="text-gray-400 mb-6">
              Broadcasting the best music 24/7. Your beats, your vibe, your station.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                Listen Live
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">DJs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Request a Song</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Morning Pulse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Coffee Beats</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Drive Time</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Night Sessions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-PULSE</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@pulsefm.radio</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Music Ave, Radio City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PULSE FM. All rights reserved. Broadcasting since 2015.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
