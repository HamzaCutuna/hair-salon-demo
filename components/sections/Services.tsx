'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'Haircut',
    description: 'Precision haircut tailored to your style, includes consultation, wash, and styling.',
    icon: '/images/haircut-icon.svg',
  },
  {
    id: 2,
    title: 'Hot Towel Shave',
    description: 'Traditional hot towel shave with straight razor for the smoothest result.',
    icon: '/images/shave-icon.svg',
  },
  {
    id: 3,
    title: 'Beard Trim',
    description: 'Expertly shaped and styled beard trim, includes hot towel and premium oils.',
    icon: '/images/beard-icon.svg',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We offer a range of premium grooming services tailored to enhance your style and confidence.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-black-light p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="bg-black p-3 rounded-lg inline-block">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 