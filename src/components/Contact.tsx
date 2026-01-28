import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      lines: ['Industrial Area, Enterprise Road', 'Nairobi, Kenya'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+254 700 000 000', '+254 711 111 111'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@revolutioncontainers.co.ke', 'sales@revolutioncontainers.co.ke'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something Amazing
          </h2>
          <p className="section-subtitle mt-4">
            Visit our showroom, give us a call, or send us a message
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-industrial">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="input-industrial"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="input-industrial"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="input-industrial"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  className="input-industrial min-h-[150px]"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
              <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
                <a href="tel:+254700000000">
                  <Phone className="w-4 h-4 mr-2" /> Call
                </a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild className="flex-1 min-w-[120px]">
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
                <a href="mailto:info@revolutioncontainers.co.ke">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </a>
              </Button>
            </div>
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-industrial h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.166862254858!2d36.85!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11!2sIndustrial%20Area%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1706000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Revolution Containers Location"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    {info.lines.map((line, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
