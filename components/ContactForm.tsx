import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-text-primary mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-obsidian-light border border-cyan-accent/30 rounded text-text-primary placeholder-text-secondary focus:border-cyan-accent focus:outline-none transition"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-text-primary mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-obsidian-light border border-cyan-accent/30 rounded text-text-primary placeholder-text-secondary focus:border-cyan-accent focus:outline-none transition"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-text-primary mb-2 font-medium">Phone / WhatsApp</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-obsidian-light border border-cyan-accent/30 rounded text-text-primary placeholder-text-secondary focus:border-cyan-accent focus:outline-none transition"
          placeholder="+971 52 421 8866"
        />
      </div>

      <div>
        <label className="block text-text-primary mb-2 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-obsidian-light border border-cyan-accent/30 rounded text-text-primary placeholder-text-secondary focus:border-cyan-accent focus:outline-none transition resize-none"
          placeholder="Tell us what you need..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="cta-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
