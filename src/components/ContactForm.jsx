import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

// Initialize EmailJS once when component loads
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);      // PUBLIC KEY

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) return;
    
    setLoading(true);
    setStatusMessage('');
    setStatusType('');

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setStatusMessage('Please fill in all required fields.');
      setStatusType('error');
      setLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,      // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        }
      );

      if (response.status === 200) {
        setStatusMessage('✅ Thank you for your message! I\'ll get back to you soon.');
        setStatusType('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('❌ Error sending message. Please try again.');
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-light text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card-offset p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-primary font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="eg: Jhon"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light border-2 border-accent rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-primary font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="eg: Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light border-2 border-accent rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-primary font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="eg: jhondoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light border-2 border-accent rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-primary font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light border-2 border-accent rounded-lg focus:outline-none focus:border-primary"
                  placeholder="What is this about?"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-primary font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-light border-2 border-accent rounded-lg focus:outline-none focus:border-primary resize-none"
                  required
                ></textarea>
              </div>

              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="ui-btn w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`mt-4 p-4 rounded border ${
                  statusType === 'success'
                    ? 'bg-green-100 text-green-700 border-green-400'
                    : 'bg-red-100 text-red-700 border-red-400'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div aria-live="polite" className="sr-only">
              {statusMessage}
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-light mb-6">Other Ways to Reach Me</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:sreejithsreenivasan.06@gmail.com" className="text-light hover:text-accent transition-colors">
                <strong>Email:</strong> sreejithsreenivasan.06@gmail.com
              </a>
              <a href="tel:+971544754427" className="text-light hover:text-accent transition-colors">
                <strong>Phone:</strong> +971 54 475 4427
              </a>
              <a href="https://www.linkedin.com/in/sreejithas" target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent transition-colors">
                <strong>LinkedIn:</strong> Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
