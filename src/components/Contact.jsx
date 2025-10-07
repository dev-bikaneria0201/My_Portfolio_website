import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setLoading(false);
      return;
    }

    try {
      // Google Apps Script Web App URL - Replace with actual deployed URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzzMVbl_ZP5KkWLp068ok0lNXtihVK6BjOy7cvWO2DnJk6B_Y2_tr3wU7C_VdrV5G_KQg/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setStatus({ type: 'success', message: 'Your message has been successfully sent!' });
      setFormData({ name: '', contact: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Let's discuss your next project</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-300 mb-2">Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Contact No</label>
              <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="+91 1234567890" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="your@email.com" required />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Message *</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none" placeholder="Your message..." required></textarea>
          </div>

          {status.message && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}`}>
              {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              {status.message}
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            <Send size={20} />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
