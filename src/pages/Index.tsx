import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import MetricsStrip from '@/components/MetricsStrip';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vivek Kumar — Data Science & People Analytics</title>
        <meta name="description" content="Portfolio of Vivek Kumar — aspiring Data Science / Business Analyst intern working across People Analytics, machine learning, and BI dashboards. TISS Mumbai." />
        <link rel="canonical" href="https://vivek-kumar-portfolio.lovable.app" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <MetricsStrip />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
