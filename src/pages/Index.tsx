import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vivek Kumar | Data Science & People Analytics</title>
        <meta name="description" content="Vivek Kumar - Aspiring Data Science Intern skilled in Power BI, Excel, Python, Streamlit, and HR Analytics. Pursuing M.Sc. Analytics at TISS Mumbai." />
        <meta name="keywords" content="Data Science, HR Analytics, People Analytics, Power BI, Python, Machine Learning, Streamlit, TISS Mumbai, Vivek Kumar" />
        <meta property="og:title" content="Vivek Kumar | Data Science & People Analytics Portfolio" />
        <meta property="og:description" content="Data science graduate with hands-on experience in HR analytics, machine learning models, and business-driven dashboards." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vivek-kumar-portfolio.lovable.app" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
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
