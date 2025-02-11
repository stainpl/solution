 import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import AnimatedLine from '../components/AnimatedLine';
import Typewriter from 'typewriter-effect';
import DataCounter from '../components/DataCounter';
import TeamCarousel from '../components/TeamCarousel';
import GalleryAnimation from '../components/GalleryAnimation';

// Home Section with video background and typewriter text
const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background (only on client) */}
      {mounted && (
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video.mp4"  
          autoPlay
          loop
          muted
        />
      )}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Allpilar Solutions</h1>
          <div className="text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Let's build your dream.",
                  "One Pilar solution.",
                  "Innovative IT solutions.",
                  "Transforming ideas into reality."
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>
        </div>
      </div>
      <AnimatedLine />
    </section>
  );
};

// About Section with centered heading, sub-heading and two images with text below
const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-xl mb-8">
          We are an innovative IT solution provider focused on delivering high‑quality web development and creative digital solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/about1.gif" alt="About 1" className="w-full rounded-lg" />
            <p className="mt-2">Our mission is to innovate and inspire.</p>
          </div>
          <div>
            <img src="/about2.gif" alt="About 2" className="w-full rounded-lg" />
            <p className="mt-2">Our vision is to deliver excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section with service cards, animated data counters, and team carousel
const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic websites.',
      imageSrc: './webdev.png'
    },
    {
      title: 'Mobile Apps',
      description: 'Creating intuitive mobile applications.',
      imageSrc: '/appdev.png'
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploying scalable cloud solutions.',
      imageSrc: '/cloud.png'
    },
    {
      title: 'Cyber Security',
      description: 'Ensuring secure IT environments.',
      imageSrc: '/cyber.png'
    },
  ];

  const team = [
    { name: 'Alice', title: 'Developer', image: '/team1.png' },
    { name: 'Bob', title: 'Designer', image: '/team2.png' },
    { name: 'Charlie', title: 'Project Manager', image: '/team3.png' },
    { name: 'Diana', title: 'QA Specialist', image: '/team4.png' },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
              <img src={service.imageSrc} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Data Counters */}
        <div className="mt-16 p-8 bg-gray-800 rounded-lg flex justify-around">
          <DataCounter label="Happy Customers" targetCount={169} />
          <DataCounter label="Projects" targetCount={200} />
          <DataCounter label="Workers" targetCount={50} />
        </div>
        {/* Team Carousel */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <TeamCarousel team={team} />
        </div>
      </div>
      <AnimatedLine />
    </section>
  );
};

// Contact Section with a smart contact form
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center text-gray-400 mb-8">
          Call us: <span className="font-bold">+123456789</span> | Email: <span className="font-bold">info@itsolution.com</span>
        </p>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" required rows="4" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
      <AnimatedLine />
    </section>
  );
};

const IndexPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <GalleryAnimation />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default IndexPage;

