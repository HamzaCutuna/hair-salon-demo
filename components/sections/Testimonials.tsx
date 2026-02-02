'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mak Čengić',
    text: "I've been coming to this barbershop for over 10 years, and I can confidently say it's the best in town! The service is always excellent, and the atmosphere is warm and friendly, making every visit a great experience.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Omer Ozdil',
    text: 'Clean and a friendly place to have a haircut in the center of Sarajevo. I had a really nice chat with Amar while having a haircut for my son which he really liked it. Bear in mind, They require an appointment.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Tarik Efendić',
    text: "I've been coming here for over 10 years, and it's the best in town! Djani and Amar are amazing—skilled, friendly, and always pay attention to detail. The shop is clean and welcoming, and the service is consistently top-notch. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: 'Stefan Lang',
    text: 'My son and I were both very happy with the result. Friendly and very sympathetic. And the price is more than fair! Absolutly and highly recommended!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ryan Lodder',
    text: "Myself and another backpacker were after a spot to get our haircut and we are very happy we found Gianni's place. I'd absolutely recommend for anyone travelling and in need of a cut.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const transitionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="testimonials" className="py-20 bg-black-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={transitionVariants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black p-8 md:p-12 rounded-lg border border-gold/20 relative">
            {/* Quote Icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-black-light p-3 rounded-full border-2 border-gold shadow-gold/30 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a4 4 0 00-4 4v5h4V9h2V5zm12 0h-2a4 4 0 00-4 4v5h4V9h2V5z"
                  />
                </svg>
              </div>
            </div>

            {/* AnimatePresence za testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-lg text-center italic mb-8">
                  {testimonials[activeIndex].text}
                </p>

                <div className="text-center">
                  <p className="text-gold font-semibold text-lg">{testimonials[activeIndex].name}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigacija */}
            <div className="flex justify-center mt-10 items-center space-x-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gold/20 hover:bg-gold/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-gold" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === activeIndex ? 'bg-gold' : 'bg-gold/30'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gold/20 hover:bg-gold/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-gold" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;