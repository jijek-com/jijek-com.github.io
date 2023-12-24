import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Education from './sections/education/Education';
import Contacts from './sections/contacts/Contacts';
import Footer from './sections/footer/Footer';

import './App.css';


function App() {
  return (
    <main className="">
      <Navbar />

      <Header />
      <Education />

      <Contacts />
      <Footer />
    </main>
  );
}

export default App;
