import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [focused, setFocused] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '';

      // Debug logging
      console.log('EmailJS Config Check:', {
        serviceId: serviceId ? `✓ (${serviceId.substring(0, 10)}...)` : '✗ Missing',
        templateId: templateId ? `✓ (${templateId.substring(0, 10)}...)` : '✗ Missing',
        publicKey: publicKey ? `✓ (${publicKey.substring(0, 10)}...)` : '✗ Missing',
        allEnvVars: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_EMAILJS'))
      });

      if (!serviceId || !templateId || !publicKey) {
        const missing = [];
        if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
        if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
        if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');
        
        throw new Error(`EmailJS configuration incomplete. Missing: ${missing.join(', ')}. Please check your .env file and restart the server.`);
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'rakesh.kr2604@gmail.com',
        reply_to: formData.email,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully:', response);

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setFocused(null);
    } catch (error) {
      console.error('Email sending error:', error);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      
      let errorMessage = "Failed to send message. Please try again later.";
      
      // More detailed error messages
      if (error.message) {
        errorMessage = error.message;
      } else if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}`;
      } else if (error.status) {
        if (error.status === 400) {
          errorMessage = "Invalid email template or parameters. Please check EmailJS template configuration.";
        } else if (error.status === 401) {
          errorMessage = "EmailJS authentication failed. Please check your Public Key in .env file.";
        } else if (error.status === 404) {
          errorMessage = "EmailJS service or template not found. Please verify Service ID and Template ID.";
        } else {
          errorMessage = `Email service error (${error.status}). Check EmailJS dashboard for details.`;
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 8000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-slate-900/20 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Let's Build Something <span className="text-cyan-600 dark:text-cyan-400">Amazing</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Open to full-stack development opportunities, hackathons, and collaborative projects. Let's build something impactful together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'rakesh.kr2604@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9709999477' },
              { icon: MapPin, label: 'Based in', value: 'Ranchi, India' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 flex flex-col items-center text-center hover:border-cyan-400 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-none"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 dark:bg-slate-800 flex items-center justify-center mb-3 sm:mb-4 text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1">{item.label}</div>
                <div className="font-medium text-xs sm:text-sm text-slate-900 dark:text-white break-words">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="relative group">
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'name' || formData.name ? '-top-2.5 text-xs text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-900 px-2 opacity-100' : 'opacity-0 invisible'}`}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-slate-50 dark:bg-slate-950/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative group">
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'email' || formData.email ? '-top-2.5 text-xs text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-900 px-2 opacity-100' : 'opacity-0 invisible'}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-slate-50 dark:bg-slate-950/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="relative group mb-6 sm:mb-8">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'message' || formData.message ? '-top-2.5 text-xs text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-900 px-2 opacity-100' : 'opacity-0 invisible'}`}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="w-full bg-slate-50 dark:bg-slate-950/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-500/50 transition-all resize-none shadow-sm dark:shadow-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 sm:py-6 text-base sm:text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-cyan-500/30 dark:shadow-cyan-900/20 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;