import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +254 700 000 000
            </a>
            <a href="mailto:info@revolutioncontainers.co.ke" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@revolutioncontainers.co.ke
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-accent-glow transition-shadow">
                <span className="font-display text-2xl text-accent-foreground">RC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                  Revolution
                </h1>
                <p className={`text-xs transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                  Containers & Fabricators
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`font-medium transition-colors hover:text-accent ${
                      isScrolled ? 'text-foreground' : 'text-primary-foreground'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#quote">Get Free Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-primary hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-card shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 text-foreground font-medium hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <a href="#quote">Get Free Quote</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
