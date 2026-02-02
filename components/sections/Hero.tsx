'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Hair salon interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="container z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight"
        >
          Premium Grooming Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
        >
          Your local destination for exceptional haircuts, beard trims, and traditional shaves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <Link href="#booking" className="btn">
            Book Your Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 