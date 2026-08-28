import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Qualifications from './components/qualifications/Qualifications';
import Recommendations from './components/recommendations/Recommendations';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Qualifications />
        <Recommendations />
      </main>
      <Footer />
    </>
  );
}