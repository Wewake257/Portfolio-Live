import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vivek Kumar | Data Analyst & HR Analytics Professional</title>
        <meta name="description" content="Vivek Kumar - Aspiring Data Analyst with expertise in HR Analytics, Power BI, Python, and data visualization. Currently pursuing M.Sc. Analytics at TISS Mumbai." />
        <meta name="keywords" content="Data Analyst, HR Analytics, Power BI, Python, Data Visualization, TISS Mumbai, Vivek Kumar" />
        <meta property="og:title" content="Vivek Kumar | Data Analyst Portfolio" />
        <meta property="og:description" content="Aspiring Data Analyst with a strong foundation in HR and Learning & Development, skilled in analytical thinking and data visualization." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vivek-kumar-portfolio.lovable.app" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
