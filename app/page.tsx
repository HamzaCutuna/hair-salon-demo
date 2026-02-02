import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Booking from '@/components/sections/Booking';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
