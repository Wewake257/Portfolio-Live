import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BentoGridInteractive from '@/components/BentoGridInteractive';
import Projects from '@/components/Projects';
import HowIWork from '@/components/HowIWork';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vivek Kumar | Quantitative Data Analyst & ML Engineer | TISS</title>
        <meta
          name="description"
          content="Vivek Kumar — M.Sc. Analytics (TISS Mumbai). Quantitative Data Analyst & Machine Learning Engineer specializing in Enterprise Churn, PEAD Sentiment Intelligence, Marketing Attribution & Banking Analytics."
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
          <BentoGridInteractive />
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
