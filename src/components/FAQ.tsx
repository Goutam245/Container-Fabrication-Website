import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a container home?',
      answer: 'The timeline depends on the complexity of your project. A basic 20ft container conversion takes 2-3 weeks, while a luxury multi-container home can take 6-10 weeks. We provide a detailed timeline during the quotation phase.',
    },
    {
      question: 'Are container homes cheaper than traditional construction?',
      answer: 'Yes, container homes typically cost 30-50% less than traditional construction. A basic container home starts from $15,000 (KES 2M), while comparable traditional construction would cost significantly more. Plus, you save on time.',
    },
    {
      question: 'Do you deliver and install nationwide?',
      answer: 'Absolutely! We deliver and install throughout Kenya, from Mombasa to Kisumu, Nairobi to Nakuru. Our transport fleet includes crane trucks capable of handling all container sizes. Delivery costs depend on distance.',
    },
    {
      question: 'What permits are needed for a container structure?',
      answer: 'Requirements vary by county. Generally, you need building approval from your local county government. We assist with the approval process and ensure all our structures meet KEBS standards and local building codes.',
    },
    {
      question: 'How long do container structures last?',
      answer: 'With proper treatment and maintenance, container structures can last 25+ years. We use marine-grade paint, anti-rust treatment, and quality insulation to ensure longevity. We offer a 5-year structural warranty.',
    },
    {
      question: 'Can I customize the interior completely?',
      answer: 'Yes! Our containers are a blank canvas. We offer full interior customization including flooring, walls, ceilings, electrical, plumbing, HVAC, and furniture. You can also provide your own designs for us to implement.',
    },
    {
      question: 'Do you offer financing or payment plans?',
      answer: 'Yes, we offer flexible payment terms. Typically, we require 50% deposit to begin fabrication, with the balance due before delivery. We also partner with financial institutions for extended payment plans.',
    },
    {
      question: 'Are container buildings energy efficient?',
      answer: 'Modern container conversions can be highly energy efficient. We use quality insulation (keeps interior 10-15°C cooler), energy-efficient windows, solar panel integration, and LED lighting. Many clients achieve near-zero energy bills.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle mt-4">
              Everything you need to know about container solutions
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-industrial' : 'shadow-sm'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-card rounded-2xl shadow-industrial">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
