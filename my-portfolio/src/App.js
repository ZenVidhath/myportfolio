// src/App.jsx
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; // Import Certifications
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';

const App = () => {
  return (
    <Layout>
      <Hero />
      <SectionWrapper delay={0.2}>
        <About />
      </SectionWrapper>
      <SectionWrapper delay={0.4}>
        <Skills />
      </SectionWrapper>
      <SectionWrapper delay={0.6}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper delay={1.0}> {/* Adjust delay for Contact */}
        <Certifications />
      </SectionWrapper>
     
      <SectionWrapper delay={1.0}> {/* Adjust delay for Contact */}
        <Contact />
      </SectionWrapper>
    </Layout>
  );
};

export default App;