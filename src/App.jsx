
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
