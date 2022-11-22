import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/ScroollUp/Scrollup';

function App() {
  return (
    <div className='flex flex-col snap-y snap-mandatory overflow-auto'>

      <Scrollup />

      <section id='home' className='h-screen snap-start'>
        <Header />
        <Home />
      </section>

      <section id='about' className='h-screen snap-center'>
        <About />
      </section>

      <section id='skills' className='h-screen snap-center'>
        <Skills />
      </section>

      <section id='qualification' className='h-screen snap-center'>
        <Qualification />
      </section>

      <section id='portfolio' className='h-screen snap-center'>
        <Portfolio />
      </section>

      <section id='contact' className='h-screen snap-center'>
        <Contact />
      </section>

      <footer className='h-fit'>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
