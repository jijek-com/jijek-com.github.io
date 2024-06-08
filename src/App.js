import React, { useRef, Suspense } from 'react';

import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';

import { useThemeContext } from './context/theme-context';

const NavbarBlock = React.lazy(() => import('./sections/navbar/Navbar'));
const HeaderBlock = React.lazy(() => import('./sections/header/Header'));
const EducationBlock = React.lazy(() => import('./sections/education/Education'));
const ExperienceBlock = React.lazy(() => import('./sections/experience/Experience'));
const PortfolioBlock = React.lazy(() => import('./sections/portfolio/Portfolio'));
const ContactBlock = React.lazy(() => import('./sections/contacts/Contacts'));

function App() {
  const { themeState } = useThemeContext();

  const mainRef = useRef();

  return (
      <main className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}>

        <Suspense fallback={<div>Loading...</div>}>
          <NavbarBlock />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <HeaderBlock />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <EducationBlock />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <ExperienceBlock />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <PortfolioBlock />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>}>
          <ContactBlock />
        </Suspense>

        <Footer />
        <Theme />

        <FloatingNav />
      </main>
  );
}

export default App;
