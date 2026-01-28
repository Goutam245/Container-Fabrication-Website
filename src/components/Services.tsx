import { ArrowRight, Home, Building2, Store, Droplets, Fuel, Wrench } from 'lucide-react';
import serviceHome from '@/assets/service-home.jpg';
import serviceOffice from '@/assets/service-office.jpg';
import serviceRetail from '@/assets/service-retail.jpg';
import serviceAblution from '@/assets/service-ablution.jpg';
import serviceFuel from '@/assets/service-fuel.jpg';
import serviceFabrication from '@/assets/service-fabrication.jpg';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Container Homes & Airbnbs',
      description: 'Sustainable Living Redefined - Custom homes from $15,000',
      image: serviceHome,
      features: ['Custom Design', 'Off-Grid Ready', 'Fully Furnished'],
    },
    {
      icon: Building2,
      title: 'Container Offices & Workspaces',
      description: 'Mobile Solutions for Modern Business - Ready in 2 weeks',
      image: serviceOffice,
      features: ['Climate Control', 'IT Infrastructure', 'Modular Design'],
    },
    {
      icon: Store,
      title: 'Retail & Market Stalls',
      description: 'Launch Your Business Fast - Turnkey retail solutions',
      image: serviceRetail,
      features: ['Custom Branding', 'Security Features', 'Quick Setup'],
    },
    {
      icon: Droplets,
      title: 'Ablution Blocks & Facilities',
      description: 'Hygienic Solutions for Sites & Events - Certified quality',
      image: serviceAblution,
      features: ['Multiple Units', 'ADA Compliant', 'Low Maintenance'],
    },
    {
      icon: Fuel,
      title: 'Fuel Stations & Storage',
      description: 'Safe & Compliant Energy Solutions - Full turnkey installation',
      image: serviceFuel,
      features: ['NEMA Approved', 'Fire Safety', 'Spill Protection'],
    },
    {
      icon: Wrench,
      title: 'Custom Fabrication',
      description: 'Your Vision, Our Expertise - Unlimited possibilities',
      image: serviceFabrication,
      features: ['Precision Welding', 'Any Design', '3D Modeling'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background bg-industrial-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive Container Solutions
          </h2>
          <p className="section-subtitle mt-4">
            From concept to completion, we deliver premium container solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group border-2 border-transparent hover:border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg transform rotate-0 group-hover:rotate-12 transition-transform duration-500">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                >
                  Explore More
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
