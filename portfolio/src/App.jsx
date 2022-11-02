import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='flex flex-col snap-y snap-mandatory overflow-auto'>

      <section id='home' className='h-screen snap-start'>
        <Header />
        <Home />
      </section>

      <section id='sobre' className='h-screen snap-center'>
        <h1>ola</h1>
      </section>

    </div>
  );
}

export default App;
