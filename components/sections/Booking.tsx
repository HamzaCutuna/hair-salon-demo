'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Schedule your next grooming session with us. Choose the booking method that works best for you.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-black-light p-8 rounded-lg border border-gold/20 text-center hover:border-gold/50 transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 border border-gold/30">
              <Phone className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
            <p className="mb-6 text-gray-300 flex-grow">
              Call us directly to book your appointment with our receptionist.
            </p>
            <div className="mt-auto">
              <Link 
                href="tel:#" 
                className="font-medium btn inline-block min-w-[140px]"
                rel="noopener noreferrer"
              >
                Your Phone
              </Link>
            </div>
          </div>

          <div className="bg-black-light p-8 rounded-lg border border-gold/20 text-center hover:border-gold/50 transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 border border-gold/30">
              <Calendar className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Online Booking</h3>
            <p className="mb-6 text-gray-300 flex-grow">
              Book your appointment online using our convenient scheduling system.
            </p>
            <div className="mt-auto">
              <Link 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn inline-block min-w-[140px]"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="bg-black-light p-8 rounded-lg border border-gold/20 text-center hover:border-gold/50 transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 border border-gold/30">
              <MessageSquare className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
            <p className="mb-6 text-gray-300 flex-grow">
              Send us a message via Instagram to book or inquire about our services.
            </p>
            <div className="mt-auto">
              <Link 
                href="#" 
                className="btn inline-block min-w-[140px]"
              >
                Message Us
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Booking; 