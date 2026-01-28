import { Shield, Award, Clock, MapPin } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: Shield, text: 'ISO Certified' },
    { icon: Award, text: 'KEBS Approved' },
    { icon: Clock, text: '24/7 Support' },
    { icon: MapPin, text: 'Nationwide Delivery' },
  ];

  return (
    <section className="bg-primary py-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
          
          {/* Live Counter */}
          <div className="flex items-center gap-3 px-6 py-2 bg-accent/20 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground font-semibold">
              <span className="text-accent">12</span> Projects Active Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
