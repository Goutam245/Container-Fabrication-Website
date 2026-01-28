import { MessageSquare, FileText, Wrench, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Consultation & Design',
      duration: '1-3 days',
      description: 'We listen to your needs, sketch concepts, and create detailed 3D renderings of your vision.',
      details: ['Free site visit', 'Requirement analysis', '3D visualization', 'Material selection'],
    },
    {
      icon: FileText,
      step: '02',
      title: 'Quotation & Agreement',
      duration: 'Same day',
      description: 'Transparent pricing with no hidden costs. Flexible payment plans available.',
      details: ['Detailed breakdown', 'Flexible terms', 'Digital contract', 'Deposit options'],
    },
    {
      icon: Wrench,
      step: '03',
      title: 'Fabrication',
      duration: '2-6 weeks',
      description: 'Precision welding and quality materials with regular progress updates.',
      details: ['Quality materials', 'Progress photos', 'Milestone updates', 'Quality checks'],
    },
    {
      icon: Truck,
      step: '04',
      title: 'Delivery & Installation',
      duration: '1-3 days',
      description: 'Nationwide transport with professional setup and complete handover.',
      details: ['Crane transport', 'Site setup', 'Final inspection', 'Training & handover'],
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            From Concept to Completion
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Our streamlined 4-step process ensures your project is delivered on time and exceeds expectations
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-accent via-accent to-accent/30" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Card */}
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:bg-primary-foreground/10">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <span className="text-accent text-sm font-semibold">{step.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-foreground mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 mb-4">{step.description}</p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow (Mobile/Tablet) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-accent/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
