import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import CertificationsGrid from './components/CertificationsGrid';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <ExperienceTimeline />
      <CertificationsGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

