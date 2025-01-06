import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className='relative app'>
          {/* <div className='absolute right-0 top-20 rounded-full w-2 h-2 shadow-2xl bg-green-600 '></div> */}
          <Layout />
          <Home />
          <About />
          <Services />
          <Contact/>
      </div>
    </>
  )
}

export default App
