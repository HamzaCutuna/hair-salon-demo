'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Visit our salon or get in touch through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black-light p-8 rounded-lg border border-gold/20">
              <h3 className="text-xl font-semibold mb-6 text-gold">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-gray-300">Your Address, City, Country</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">Your Phone Number</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">your@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-300">Mon–Fri: 9:00 – 18:00</p>
                    <p className="text-gray-300">Saturday: 9:00 – 14:00</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden border border-gold/20 bg-black-light flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">Add your Google Maps embed URL here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 