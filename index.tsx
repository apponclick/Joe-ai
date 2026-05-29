import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Joe-ai: The Future of Enterprise Intelligence</title>
        <meta name="description" content="Joe-ai - Orchestrating the Future of Enterprise Intelligence with AI-powered automation and unified intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <WhatsAppWidget />

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center fade-in-up">
              <h1 className="section-title text-5xl md:text-6xl mb-6">
                Joe-ai: Orchestrating the Future of Enterprise Intelligence
              </h1>
              <p className="section-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform fragmented automation into unified intelligence. Streamline workflows, reduce costs, and unlock enterprise-wide potential with AI-powered orchestration.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="cta-button text-lg px-8 py-4"
                >
                  Start Your AI Journey Now
                </button>
                <a
                  href={`https://wa.me/97152421616?text=Hi! I'm interested in learning more about Joe-ai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button text-lg px-8 py-4 text-center"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 bg-obsidian-light/50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">The Joe-ai Advantage</h2>
            <p className="section-subtitle text-center max-w-2xl mx-auto">
              Holistic Intelligence for Enterprise Transformation
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Unified Orchestration',
                  description: 'End-to-end automation across all enterprise systems with seamless integration.',
                },
                {
                  title: 'RAG-Powered Intelligence',
                  description: 'Contextual AI that understands your business and delivers actionable insights.',
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Enterprise-grade infrastructure designed to grow with your organization.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-obsidian border border-cyan-accent/30 rounded hover:border-cyan-accent transition"
                >
                  <h3 className="text-cyan-accent font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Architecture Built for Scale</h2>
            <p className="section-subtitle text-center max-w-2xl mx-auto">
              Multi-model intelligence with task-specific MCP protocols
            </p>

            <div className="mt-12 bg-obsidian-light/50 p-8 rounded border border-cyan-accent/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-cyan-accent font-bold text-xl mb-4">Core Components</h3>
                  <ul className="space-y-3">
                    {[
                      'Multi-Model Orchestration',
                      'Task-Specific MCP Protocols',
                      'Real-Time Data Processing',
                      'Enterprise Integration Layer',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-cyan-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-accent font-bold text-xl mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {[
                      '99.9% Uptime SLA',
                      '70% Reduction in Bottlenecks',
                      'Real-Time Performance Monitoring',
                      'Automated Optimization',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-cyan-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 bg-obsidian-light/50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">The Bottom Line: ROI</h2>
            <p className="section-subtitle text-center max-w-2xl mx-auto">
              Minimize Costs, Maximize Profits
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { label: 'Efficiency', value: '70%', unit: 'Improvement' },
                { label: 'Cost Reduction', value: '40%', unit: 'Savings' },
                { label: 'Time to Value', value: '8-12', unit: 'Weeks' },
                { label: 'ROI Timeline', value: '6', unit: 'Months' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-obsidian border border-cyan-accent/30 rounded text-center hover:border-cyan-accent transition"
                >
                  <div className="text-3xl font-bold text-cyan-accent mb-2">{stat.value}</div>
                  <div className="text-text-secondary text-sm mb-2">{stat.unit}</div>
                  <div className="font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="section-title text-center">Let's Build Your AI Future</h2>
              <p className="section-subtitle text-center mb-12">
                Start your transformation journey with Joe-ai today
              </p>

              <div className="bg-obsidian-light/50 p-8 rounded border border-cyan-accent/20">
                <ContactForm />
              </div>

              <div className="mt-8 text-center text-text-secondary">
                <p className="mb-4">Or connect with us directly:</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="mailto:joe-ai@aijoesys.com" className="text-cyan-accent hover:underline">
                    joe-ai@aijoesys.com
                  </a>
                  <a
                    href={`https://wa.me/97152421616?text=Hi! I'm interested in learning more about Joe-ai.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-accent hover:underline"
                  >
                    +971 52 421 8866
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-obsidian border-t border-cyan-accent/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-cyan-accent font-bold mb-4">Joe-ai</h3>
                <p className="text-text-secondary text-sm">
                  Orchestrating the Future of Enterprise Intelligence
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><a href="#solution" className="hover:text-cyan-accent transition">Solution</a></li>
                  <li><a href="#architecture" className="hover:text-cyan-accent transition">Architecture</a></li>
                  <li><a href="#contact-form" className="hover:text-cyan-accent transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-text-primary font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><a href="https://joe-ai.io" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition">Website</a></li>
                  <li><a href="mailto:joe-ai@aijoesys.com" className="hover:text-cyan-accent transition">Email</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-text-primary font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>AiJoe Systems FZ LLC</li>
                  <li>+971 52 421 8866</li>
                  <li><a href={`https://wa.me/97152421616`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition">WhatsApp</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-cyan-accent/20 pt-8 text-center text-text-secondary text-sm">
              <p>&copy; 2026 AiJoe Systems FZ LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
