import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Activities from './components/Activities/Activities';
import Recruiting from './components/Recruiting/Recruiting';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        본문으로 건너뛰기
      </a>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Activities />
        <Recruiting />
      </main>
      <Footer />
    </>
  );
}

export default App;
