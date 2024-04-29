import { useRef } from 'react';

import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Education from './sections/education/Education';
import Expirience from './sections/expirience/Expirience';
import Portfolio from './sections/portfolio/Portfolio';
import Contacts from './sections/contacts/Contacts';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';

import { useThemeContext } from './context/theme-context';

function App() {
  const { themeState } = useThemeContext();

  const mainRef = useRef();

  return (
      <main className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}>
        <Navbar />

        <Header />
        <Education />
        <Expirience />
        <Portfolio />
        <Contacts />
        <Footer />
        <Theme />

        <FloatingNav />
      </main>
  );
}

export default App;
