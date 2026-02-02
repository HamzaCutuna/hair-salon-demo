'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-black-light">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="section-title">Our Story</h2>
          <p className="text-lg mb-8">
            Our salon was built on a passion for traditional barbering and modern style.
            We&apos;ve grown into a place where clients come for precision cuts, expert beard work,
            and a relaxed, professional atmosphere.
          </p>
          <p className="text-lg mb-8">
            We combine classic techniques with contemporary styling. Our team is trained in
            both traditional and modern grooming, so every client gets an experience that
            fits their style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black p-6 rounded-lg border border-gold/20">
              <h3 className="text-gold text-xl font-semibold mb-3">Expertise</h3>
              <p>Our team of skilled barbers brings years of experience and continuous training to every service.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gold/20">
              <h3 className="text-gold text-xl font-semibold mb-3">Quality</h3>
              <p>We use only premium products and tools to ensure the highest quality results for our clients.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gold/20">
              <h3 className="text-gold text-xl font-semibold mb-3">Experience</h3>
              <p>More than just a haircut, we provide a relaxing and memorable grooming experience.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 