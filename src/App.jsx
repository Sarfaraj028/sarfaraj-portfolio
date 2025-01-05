import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className='app'>
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
