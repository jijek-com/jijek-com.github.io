import { useRef } from 'react';

import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';

import { useThemeContext } from './context/theme-context';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Education from './sections/education/Education';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Contacts from './sections/contacts/Contacts';

function App() {
  const { themeState } = useThemeContext();

  const mainRef = useRef();

  return (
      <div className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>

        <Navbar />
        <Header />
        <Education />
        <Experience />
        <Portfolio />
        <Contacts />

        <Footer />
        <Theme />

        <FloatingNav />
      </div>
  );
}

export default App;
