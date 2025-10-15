import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AIChatSection from './components/AIChatSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <AIChatSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;