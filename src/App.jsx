import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <>
      <div>
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
