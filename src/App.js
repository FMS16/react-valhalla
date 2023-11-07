import './assets/styles/app.css';
import Banner from './components/Banner';
import logo from "./assets/images/Negro_logo.png"
import Header from './components/Header';
import Us from './components/Us';
import WorksDone from './components/WorksDone';
import Contact from './components/Contact';
import { useEffect } from 'react';
import Footer from './components/Footer';
import { useState } from 'react';
import HeaderSticky from './components/HeaderSticky';
function App() {
  const [ isSticky, setIsSticky ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos >= 160) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {isSticky && (<HeaderSticky />)}
      <Banner title="VALHALLA" subtitle="bienvenidos a la creatividad" />
      <Us />
      <WorksDone />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
