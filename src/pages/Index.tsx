import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import HowIWork from '@/components/HowIWork';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vivek Kumar | Data Analyst | HR Analytics | TISS</title>
        <meta
          name="description"
          content="Vivek Kumar — M.Sc. Analytics student at TISS Mumbai. Data analyst focused on HR & people analytics, dashboards and reporting with Excel, Power BI, SQL and Python."
        />
        <link rel="canonical" href="https://wewake257.lovable.app" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <HowIWork />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
