import { Navbar, Footer } from '@/components';

// sections
import Hero from './hero';
import Skills from './skills';
import IndustriesServed from './IndustriesServed';
import Testimonial from './testimonial';
import PopularClients from './popular-clients';
import ContactForm from './contact-form';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="industries">
        <IndustriesServed />
      </div>
      <div id="clients">
        <PopularClients />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
