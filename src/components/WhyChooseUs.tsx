import { Award, Truck, Leaf, Users, Shield, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: '15 Years Mastery',
      description: 'Over a decade of precision engineering and innovative container solutions across East Africa. Our experienced team has delivered 500+ successful projects.',
    },
    {
      icon: Truck,
      title: 'End-to-End Service',
      description: 'From initial concept and 3D design to fabrication, delivery, and installation. We handle everything so you can focus on your vision.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Innovation',
      description: 'Eco-friendly solutions that reduce construction waste by 80%. Our container structures are recyclable, energy-efficient, and built to last.',
    },
  ];

  const additionalBenefits = [
    { icon: Users, text: 'Dedicated Project Manager' },
    { icon: Shield, text: '5-Year Structural Warranty' },
    { icon: Clock, text: 'Fast Turnaround Times' },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Revolution
          </span>
          <h2 className="section-title">
            Kenya's Most Trusted Container Experts
          </h2>
          <p className="section-subtitle mt-4">
            We don't just build containers – we engineer possibilities
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-industrial hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="flex flex-wrap justify-center gap-6">
          {additionalBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
