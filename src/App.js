
import './App.css';
import Trustedsec from './components/Trustedsec';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hybridsection from './components/Hybridsection';
import Integrations from './components/Integrations';
import Section from './components/Sectionss';
import Brainstorm from './components/Brainstorm';
import Buildteams from './components/Buildteams';
import Lovedby from './components/Lovedby';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar/>
      <Hero/>
      <Trustedsec/>
      <Hybridsection/>
      <Integrations/>
      <Section/>
      <Brainstorm/>
      <Buildteams/>
      <Lovedby/>
      <Footer/>
    </div>
  );
}

export default App;
