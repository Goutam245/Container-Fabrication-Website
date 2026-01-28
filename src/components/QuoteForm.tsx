import { useState } from 'react';
import { Send, Phone, Clock, Shield, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    containerSize: '',
    timeline: '',
    budget: 50,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const benefits = [
    { icon: Clock, text: 'Response within 2 hours' },
    { icon: Shield, text: 'No obligation quote' },
    { icon: CheckCircle, text: 'Free site assessment' },
  ];

  return (
    <section id="quote" className="py-20 md:py-28 bg-muted bg-industrial-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-industrial">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Get Your Free Quote
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us about your project and we'll provide a detailed estimate within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    className="input-industrial"
                    placeholder="John Kamau"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    className="input-industrial"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="input-industrial"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
                  <select
                    className="input-industrial"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="home">Container Home</option>
                    <option value="office">Container Office</option>
                    <option value="retail">Retail/Market Stall</option>
                    <option value="ablution">Ablution Block</option>
                    <option value="fuel">Fuel Station</option>
                    <option value="custom">Custom Fabrication</option>
                  </select>
                </div>
              </div>

              {/* Container Size & Timeline */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Container Size</label>
                  <select
                    className="input-industrial"
                    value={formData.containerSize}
                    onChange={(e) => setFormData({ ...formData, containerSize: e.target.value })}
                  >
                    <option value="">Select size</option>
                    <option value="20ft">20ft Standard</option>
                    <option value="40ft">40ft Standard</option>
                    <option value="40ft-hc">40ft High Cube</option>
                    <option value="multiple">Multiple Containers</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Timeline Needed</label>
                  <select
                    className="input-industrial"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="standard">Standard (3-6 weeks)</option>
                    <option value="flexible">Flexible (6+ weeks)</option>
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range: <span className="text-accent font-bold">KES {formData.budget.toLocaleString()}K - {(formData.budget * 2).toLocaleString()}K</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>KES 50K</span>
                  <span>KES 5M+</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                <textarea
                  className="input-industrial min-h-[120px]"
                  placeholder="Tell us more about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="accent" size="xl" className="w-full group">
                Get Your Free Quote
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </div>

          {/* Benefits Side */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Request a Quote Now?</h3>
              
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <span className="text-lg font-semibold">{benefit.text}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/80 mb-4">
                  Prefer to talk? Call us directly:
                </p>
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center gap-3 text-2xl font-bold hover:text-accent transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  +254 700 000 000
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-card rounded-2xl p-6 shadow-industrial">
              <h4 className="font-semibold text-foreground mb-4">Trusted by 500+ Clients</h4>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-semibold text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-accent">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
