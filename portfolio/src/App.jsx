import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='flex flex-col snap-y snap-mandatory overflow-auto'>

      <section id='home' className='h-screen'>
        <Header />
        <Home />
      </section>

    </div>
  );
}

export default App;
