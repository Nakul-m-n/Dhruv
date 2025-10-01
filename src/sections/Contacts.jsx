import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setSending(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/dhruvmescet2025@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', err);
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    { name: 'Asia', phone: '+91 79022 35842' },
    { name: 'Fahima', phone: '+91 90370 04269' },
    { name: 'Mehjebin', phone: '+91 7559980221' },
    { name: 'Dhiyana', phone: '+91 8330078453' },
    { name: 'Fidha', phone: '+91 9207880755' },
    { name: 'Kenza', phone: '+91 7012893844' },
    { name: 'Rasmin', phone: '+91 9778167678' },
    { name: 'Beevi Fahima', phone: '+91 9495932901' }
  ];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-3 sm:px-4 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4">Our Team</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Reach out to any of our team members. We're here to help!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <div className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Team Members</div>
                      {contacts.map((contact, index) => (
                        <div key={index} className="py-2 px-3 backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg">
                          <span className="text-sm sm:text-base text-gray-300 font-medium">{contact.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Contact Numbers</div>
                      {contacts.map((contact, index) => (
                        <div key={index} className="py-2 px-3 backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg">
                          <span className="text-xs sm:text-sm text-white font-mono break-all">{contact.phone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4">Contact Details</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Find us at our campus or reach out via email.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-sm sm:text-base text-gray-300 break-all">dhruvmescet2025@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">MESCET</h4>
                    <p className="text-sm sm:text-base text-gray-300">Kunnukara P.O, N.Paravur<br />Ernakulam, 683578</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
                <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="https://www.instagram.com/dhruv_fest" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/20 rounded-lg flex items-center justify-center hover:scale-110 hover:from-pink-500/30 hover:to-purple-500/30 transition-all cursor-pointer"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-8 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-lg bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-400/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-pulse">
                <Send className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 sm:mb-3">Message Sent!</h3>
              <p className="text-sm sm:text-base text-gray-300">We'll get back to you soon.</p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Send us a Message</h3>
                <p className="text-sm sm:text-base text-gray-300 px-2">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {error && (
                  <div className="md:col-span-2 text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2">
                    {error}
                  </div>
                )}

                <div className="md:col-span-2">
                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50 hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}