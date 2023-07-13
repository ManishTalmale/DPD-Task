import './App.css';
import Header from './components/Header/Header';
import Service from './components/Services/Service'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Top from './components/Header/Top';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <Contact />
      <Top />
      <Footer />
    </div>
  );
}

export default App;
