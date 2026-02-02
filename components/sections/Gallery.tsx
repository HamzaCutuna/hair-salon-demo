'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

// Define the image type
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

// Unsplash stock images for demo (verified CDN URLs)
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
    alt: 'Barbershop interior',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    alt: 'Haircut in progress',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    alt: 'Barber at work',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80',
    alt: 'Classic haircut',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    alt: 'Beard trim',
  },
  {
    id: 6,
    src: '/images/exterior.jpg',
    alt: 'Exterior of the salon',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Take a look at our premium barbershop and some of our finest work.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="aspect-square overflow-hidden rounded-lg relative cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 bg-gold/30 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-20 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {image.alt}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              >
                <X size={32} />
              </button>
              <div className="aspect-square md:aspect-video relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 