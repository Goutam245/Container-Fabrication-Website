import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Wanjiku',
      role: 'Property Developer',
      company: 'Wanjiku Properties Ltd',
      project: 'Container Villa, Nairobi',
      text: "Revolution Containers transformed our vision into reality. The container home they built for our Airbnb portfolio has a 95% occupancy rate. Their attention to detail and commitment to quality is unmatched.",
      rating: 5,
      initials: 'SW',
    },
    {
      name: 'James Ochieng',
      role: 'Founder & CEO',
      company: 'TechHub Kenya',
      project: 'Mobile Office, Kisumu',
      text: "We needed a flexible workspace solution that could grow with our startup. Revolution delivered a beautiful office in just 3 weeks. The team was professional, and the result exceeded our expectations.",
      rating: 5,
      initials: 'JO',
    },
    {
      name: 'Mary Akinyi',
      role: 'Business Owner',
      company: 'Mama Akinyi Foods',
      project: 'Food Stall, Mombasa',
      text: "Starting my restaurant felt impossible until I discovered container solutions. Revolution helped me launch my dream business at a fraction of the cost. Now I'm expanding to a second location!",
      rating: 5,
      initials: 'MA',
    },
    {
      name: 'Peter Mwangi',
      role: 'Operations Manager',
      company: 'SafariCamp Adventures',
      project: 'Camp Facilities, Maasai Mara',
      text: "The ablution blocks Revolution built for our safari camp are world-class. Solar-powered, eco-friendly, and our guests love them. They've become a unique selling point for our camp.",
      rating: 5,
      initials: 'PM',
    },
    {
      name: 'Hassan Ali',
      role: 'Director',
      company: 'Nakuru Petroleum',
      project: 'Fuel Station, Nakuru',
      text: "Revolution's turnkey fuel station solution saved us months of construction time and significant costs. The station is fully compliant, safe, and has been operating flawlessly for 2 years.",
      rating: 5,
      initials: 'HA',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Client Stories
          </span>
          <h2 className="section-title">
            Trusted by Leaders Across Kenya
          </h2>
          <p className="section-subtitle mt-4">
            Hear from businesses and individuals who transformed their spaces with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-industrial relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-accent" />
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {/* Profile */}
              <div className="md:col-span-1 text-center md:text-left">
                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground text-2xl font-bold mb-4">
                  {testimonials[activeIndex].initials}
                </div>
                <h4 className="font-bold text-foreground">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                <p className="text-sm text-accent font-medium">{testimonials[activeIndex].company}</p>
                <div className="flex justify-center md:justify-start gap-1 mt-2 text-accent">
                  {'★'.repeat(testimonials[activeIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="md:col-span-3">
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <span className="text-sm font-medium text-muted-foreground">Project:</span>
                  <span className="text-sm font-semibold text-foreground">{testimonials[activeIndex].project}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-accent w-8' : 'bg-muted hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
