import { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import serviceHome from '@/assets/service-home.jpg';
import serviceOffice from '@/assets/service-office.jpg';
import serviceRetail from '@/assets/service-retail.jpg';
import serviceAblution from '@/assets/service-ablution.jpg';
import serviceFuel from '@/assets/service-fuel.jpg';
import serviceFabrication from '@/assets/service-fabrication.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Homes', 'Offices', 'Stalls', 'Ablutions', 'Fuel', 'Custom'];

  const projects = [
    {
      title: 'Modern Container Villa',
      location: 'Nairobi',
      category: 'Homes',
      description: '3x40ft luxury home with panoramic views, full kitchen, 3 bedrooms, and solar power system.',
      image: serviceHome,
      specs: '120 sqm | 6 weeks',
    },
    {
      title: 'Tech Startup Office',
      location: 'Kisumu',
      category: 'Offices',
      description: 'Mobile workspace for 20 employees with server room, meeting spaces, and AC throughout.',
      image: serviceOffice,
      specs: '80 sqm | 3 weeks',
    },
    {
      title: 'Downtown Food Court',
      location: 'Mombasa',
      category: 'Stalls',
      description: '10-stall market with shared dining area, waste management, and power distribution.',
      image: serviceRetail,
      specs: '200 sqm | 8 weeks',
    },
    {
      title: 'Safari Camp Ablutions',
      location: 'Maasai Mara',
      category: 'Ablutions',
      description: '8-unit luxury facility with solar heating, eco-friendly waste treatment.',
      image: serviceAblution,
      specs: '60 sqm | 4 weeks',
    },
    {
      title: 'Highway Fuel Station',
      location: 'Nakuru',
      category: 'Fuel',
      description: 'Full service station with 4 dispensers, convenience store, and driver rest area.',
      image: serviceFuel,
      specs: '150 sqm | 10 weeks',
    },
    {
      title: 'Custom Mining Equipment',
      location: 'Eldoret',
      category: 'Custom',
      description: 'Specialized container modifications for mining equipment transport and storage.',
      image: serviceFabrication,
      specs: 'Custom | 12 weeks',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="section-title">
            Projects That Inspire
          </h2>
          <p className="section-subtitle mt-4">
            See how we've transformed containers into exceptional spaces across Kenya
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-tab ${
                activeFilter === filter ? 'filter-tab-active' : 'filter-tab-inactive'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-industrial hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-primary-foreground text-sm">{project.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.specs}</span>
                  <button className="flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all">
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
