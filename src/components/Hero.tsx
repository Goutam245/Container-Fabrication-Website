import { ArrowRight, ChevronDown, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-container-home.jpg';

const Hero = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern container home at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in border border-primary-foreground/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Kenya's Leading Container Innovators</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Transforming Steel
            </span>
            <span className="block text-gradient-accent animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Into Smart Spaces
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Premium Container Solutions | Custom Fabrication | Nationwide Logistics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#quote">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.number}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <a href="#services" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <span className="text-sm font-medium">Explore Our Services</span>
          <ChevronDown className="w-6 h-6 scroll-indicator" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
