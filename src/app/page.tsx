"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaLightbulb, FaVideo, FaMicrophone, FaMapMarkerAlt, FaPlay, FaArrowRight, FaInstagram, FaTiktok, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import './fonts.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // For parallax scrolling effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah & Mark",
      event: "Wedding Reception",
      quote: "Bubzz Entertainment transformed our wedding into an unforgettable party! Their young DJs knew exactly how to read the room and keep everyone dancing all night.",
      image: "/testimonials/wedding-couple.jpg"
    },
    {
      name: "Priya Patel",
      event: "Diwali Celebration",
      quote: "Finding DJs who could seamlessly blend Bollywood classics with modern hits was a challenge until we found Bubzz. They created the perfect fusion soundtrack for our event!",
      image: "/testimonials/diwali-event.jpg"
    },
    {
      name: "TechNow Inc.",
      event: "Corporate Holiday Party",
      quote: "Professional, punctual, and incredibly talented. Our employees are still talking about how amazing the music was at our company event.",
      image: "/testimonials/corporate-event.jpg"
    }
  ];

  const services = [
    {
      icon: <FaMusic className="text-5xl mb-4 text-indigo-500" />,
      title: "Professional DJ Services",
      description: "Full-service DJ experience with music curation, MC services, and seamless audio management.",
      price: "Starting at $450",
    },
    {
      icon: <FaLightbulb className="text-5xl mb-4 text-indigo-500" />,
      title: "Lighting Packages",
      description: "From basic setups to advanced multi-system configurations with custom DMX styling.",
      price: "Starting at $50",
    },
    {
      icon: <FaMicrophone className="text-5xl mb-4 text-indigo-500" />,
      title: "Audio Solutions",
      description: "Wireless & wired microphone packages for speaking, singing, and amplifying instruments.",
      price: "Starting at $50",
    },
    {
      icon: <FaVideo className="text-5xl mb-4 text-indigo-500" />,
      title: "Video Projections",
      description: "Project custom content onto any surface, fully integrated with our audio systems.",
      price: "Starting at $50",
    },
  ];

  const musicStyles = [
    "Bollywood", "Hip Hop", "South Indian", "Top-40/Pop", "EDM", 
    "Country", "House", "Latin", "Rap", "Punjabi/Dhol", "Rock", "Jazz", "K-Pop"
  ];

  const eventTypes = [
    "Wedding Receptions", "Sweet 16s", "Graduation Parties",
    "Corporate Events", "Diwali Celebrations", "Holi Festivals",
    "Anniversary Parties", "Backyard Events", "Club Gatherings",
    "Fraternity & Sorority Events", "Beach Parties", "Quinceaneras",
    "Bar/Bat Mitzvahs", "Family Reunions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Bubzz Entertainment Logo" 
              width={50} 
              height={50} 
              className="mr-2"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Bubzz Entertainment
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/services" className="hover:text-indigo-400 transition">Services</Link>
            <Link href="/djs" className="hover:text-indigo-400 transition">Meet Our DJs</Link>
            <Link href="/events" className="hover:text-indigo-400 transition">Events</Link>
            <Link href="/partners" className="hover:text-indigo-400 transition">Partners</Link>
            <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
            <Link href="/login" className="px-4 py-1 bg-indigo-600 rounded-full hover:bg-indigo-700 transition">Client Login</Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-t border-gray-800"
            >
              <div className="flex flex-col px-4 py-2 space-y-3">
                <Link href="/services" className="py-2 hover:text-indigo-400 transition">Services</Link>
                <Link href="/djs" className="py-2 hover:text-indigo-400 transition">Meet Our DJs</Link>
                <Link href="/events" className="py-2 hover:text-indigo-400 transition">Events</Link>
                <Link href="/partners" className="py-2 hover:text-indigo-400 transition">Partners</Link>
                <Link href="/contact" className="py-2 hover:text-indigo-400 transition">Contact</Link>
                <Link href="/login" className="py-2 text-center bg-indigo-600 rounded-full hover:bg-indigo-700 transition">Client Login</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            className="object-cover w-full h-full"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="block">Turn Your Event Into An</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Unforgettable Experience
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            Professional DJs, premium sound, and captivating lighting for any occasion in the Raleigh-Durham area.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="px-8 py-4 bg-indigo-600 rounded-full text-lg font-bold hover:bg-indigo-700 transform hover:scale-105 transition flex items-center justify-center">
              Book Your Event <FaArrowRight className="ml-2" />
            </Link>
            <Link href="/services" className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-lg font-bold hover:bg-white/10 transform hover:scale-105 transition">
              Explore Services
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" className="text-white">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide tailored entertainment packages to match your vision and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-700 transition group"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="font-bold text-indigo-400">{service.price}</p>
                <Link href="/services" className="mt-4 inline-block text-indigo-400 group-hover:text-indigo-300 transition">
                  Learn more <span className="group-hover:ml-1 transition-all">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services" className="px-8 py-4 bg-indigo-600 rounded-full text-lg font-bold hover:bg-indigo-700 transform hover:scale-105 transition">
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>
      
      {/* Music Styles Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("/music-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Music For Every Taste</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DJs are experts in a wide variety of genres, allowing us to create the perfect soundtrack for any event or audience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {musicStyles.map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-800 to-purple-900 rounded-full text-lg font-medium hover:from-indigo-700 hover:to-purple-800 transition"
              >
                {style}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/djs" className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-indigo-500 rounded-full text-lg font-bold text-indigo-400 hover:bg-indigo-900/30 transform hover:scale-105 transition">
              <FaPlay className="mr-2" /> Listen to Our DJ Mixes
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Events We Rock</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate celebrations to grand gatherings, we bring the perfect energy to every occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {eventTypes.slice(0, 8).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl h-48"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('/events/${event.toLowerCase().replace(/\s+/g, '-')}.jpg')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold">{event}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/events" className="px-8 py-4 bg-indigo-600 rounded-full text-lg font-bold hover:bg-indigo-700 transform hover:scale-105 transition">
              View All Event Types
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Hear what our happy clients have to say about their experiences.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="text-xl italic mb-6">"{testimonials[activeTestimonial].quote}"</p>
                    <div>
                      <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                      <p className="text-indigo-400">{testimonials[activeTestimonial].event}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-indigo-500' : 'bg-gray-600'}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coverage Area Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("/map-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Where We Operate</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proudly serving the Triangle area and beyond in North Carolina.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-y-6 gap-x-10 max-w-4xl mx-auto">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Raleigh</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Durham</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Cary</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Chapel Hill</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Morrisville</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Apex</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">Wake Forest</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl">And More!</span>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-indigo-500 rounded-full text-lg font-bold text-indigo-400 hover:bg-indigo-900/30 transform hover:scale-105 transition">
              Check If We Serve Your Area
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Bubzz Entertainment</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets us apart from the competition and makes us the perfect choice for your next event.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-5xl mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Youthful Energy</h3>
              <p className="text-gray-300">
                Our young DJs bring fresh perspective and infectious energy to every event, creating memorable experiences for all guests.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-5xl mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Cultural Expertise</h3>
              <p className="text-gray-300">
                Specializing in multicultural events, we expertly blend diverse music styles from Bollywood to Hip Hop and everything in between.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-5xl mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Tech-Focused Approach</h3>
              <p className="text-gray-300">
                Our custom booking portal and tech-savvy DJs ensure seamless planning and execution of your event from start to finish.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-5xl mb-4">04</div>
              <h3 className="text-2xl font-bold mb-4">Premium Equipment</h3>
              <p className="text-gray-300">
                Top-of-the-line sound systems, lighting, and effects that elevate your event without breaking your budget.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-5xl mb-4">05</div>
              <h3 className="text-2xl font-bold mb-4">Personalized Service</h3>
              <p className="text-gray-300">
                Direct communication with your DJ ensures your vision is understood and executed perfectly for your special day.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-5xl mb-4">06</div>
              <h3 className="text-2xl font-bold mb-4">Affordable Excellence</h3>
              <p className="text-gray-300">
                Professional entertainment solutions that deliver exceptional value without compromising on quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 mix-blend-overlay opacity-10"
          style={{
            backgroundImage: 'url("/cta-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Make Your Event Unforgettable?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            Let's create the perfect soundtrack and atmosphere for your special occasion. Book now and transform your event into an unforgettable experience!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="px-10 py-5 bg-white text-indigo-900 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition inline-flex items-center">
              Book Your DJ Now <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Trusted Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with the best in the industry to provide complete event solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Partner logos would go here - Using placeholders */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: partner * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 flex items-center justify-center h-24"
              >
                <Image 
                  src={`/partners/partner-${partner}.png`}
                  alt={`Partner ${partner}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/partners" className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-lg font-bold hover:bg-white/10 transform hover:scale-105 transition">
              View All Partners
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or ready to book? Reach out to us and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <p className="text-xl">(919) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <p className="text-xl">info@bubzzentertainment.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="text-xl">Raleigh, NC</p>
                    <p className="text-gray-400 mt-1">Serving the entire Triangle area</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-purple-600 to-pink-500 p-3 rounded-full hover:from-purple-500 hover:to-pink-400 transition">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-black p-3 rounded-full hover:bg-gray-800 transition">
                    <FaTiktok className="w-6 h-6" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-3 rounded-full hover:bg-red-500 transition">
                    <FaYoutube className="w-6 h-6" />
                  </a>
                  <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="bg-orange-600 p-3 rounded-full hover:bg-orange-500 transition">
                    <FaSoundcloud className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-gray-300 mb-1">Event Type</label>
                  <select 
                    id="event-type" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option>Wedding Reception</option>
                    <option>Sweet 16</option>
                    <option>Corporate Event</option>
                    <option>Graduation Party</option>
                    <option>Other (please specify in message)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center mb-6">
                <Image 
                  src="/logo.png" 
                  alt="Bubzz Entertainment Logo" 
                  width={40} 
                  height={40} 
                  className="mr-2"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                  Bubzz Entertainment
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Professional DJs for any occasion, bringing energy, expertise, and cutting-edge tech to make your event unforgettable.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FaSoundcloud className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-indigo-400 transition">Services</Link>
                </li>
                <li>
                  <Link href="/djs" className="text-gray-400 hover:text-indigo-400 transition">Meet Our DJs</Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-indigo-400 transition">Events</Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-indigo-400 transition">Partners</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Events</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/events/weddings" className="text-gray-400 hover:text-indigo-400 transition">Wedding Receptions</Link>
                </li>
                <li>
                  <Link href="/events/corporate" className="text-gray-400 hover:text-indigo-400 transition">Corporate Events</Link>
                </li>
                <li>
                  <Link href="/events/sweet-16" className="text-gray-400 hover:text-indigo-400 transition">Sweet 16 Parties</Link>
                </li>
                <li>
                  <Link href="/events/indian" className="text-gray-400 hover:text-indigo-400 transition">Indian Celebrations</Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-indigo-400 transition">View All Events</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">(919) 555-0123</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@bubzzentertainment.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Raleigh, NC</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bubzz Entertainment. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-indigo-400 text-sm transition">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-indigo-400 text-sm transition">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-indigo-400 text-sm transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}