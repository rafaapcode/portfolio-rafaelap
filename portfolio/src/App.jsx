import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col snap-y snap-mandatory overflow-auto'>

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
