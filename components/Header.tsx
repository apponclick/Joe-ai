import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-obsidian-light/95 backdrop-blur-md border-b border-cyan-accent/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-cyan-accent font-display">Joe-ai</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-text-primary hover:text-cyan-accent transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="text-text-primary hover:text-cyan-accent transition"
          >
            Solution
          </button>
          <button
            onClick={() => scrollToSection('architecture')}
            className="text-text-primary hover:text-cyan-accent transition"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-text-primary hover:text-cyan-accent transition"
          >
            Contact
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="#contact-form">
            <button className="cta-button">Start Your AI Journey</button>
          </Link>
          <a
            href={`https://wa.me/97152421616?text=Hi! I'm interested in learning more about Joe-ai.`}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-obsidian-light border-t border-cyan-accent/20 p-4 space-y-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left text-text-primary hover:text-cyan-accent transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="block w-full text-left text-text-primary hover:text-cyan-accent transition"
          >
            Solution
          </button>
          <button
            onClick={() => scrollToSection('architecture')}
            className="block w-full text-left text-text-primary hover:text-cyan-accent transition"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left text-text-primary hover:text-cyan-accent transition"
          >
            Contact
          </button>
          <div className="flex flex-col gap-2 pt-4">
            <Link href="#contact-form">
              <button className="cta-button w-full">Start Your AI Journey</button>
            </Link>
            <a
              href={`https://wa.me/97152421616?text=Hi! I'm interested in learning more about Joe-ai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button w-full text-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
