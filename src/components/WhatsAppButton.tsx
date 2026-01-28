import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254700000000';
  const message = encodeURIComponent(
    "Hello! I'm interested in Revolution Containers services. I'd like to learn more about your container solutions."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-card" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
