import Header from './assets/components/Header'
import Home from './assets/pages/Home'
import BusinessPosters from './assets/components/BusinessPosters'
import EventPosters from './assets/components/EventPosters';
import Merch from './assets/components/Merch';
import Logos from './assets/components/Logos';
import Music from './assets/components/Music';
import Work from './assets/components/Work';
import Designs from './assets/components/Designs';
import BirthdayPosters from './assets/components/21stPosters'
import SoccerPosters from './assets/components/SoccerPosters'
import BookingPosters from './assets/components/BookingPosters'
import ArtCovers from './assets/components/ArtCovers';
import Footer from './assets/components/Footer';
import About from './assets/pages/About';
import ScrollToTop from './assets/components/ScrollToTop';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-posters" element={<BusinessPosters />} />
        <Route path="/event-posters" element={<EventPosters />} />
        <Route path="/21st-posters" element={<BirthdayPosters />} />
        <Route path="/booking-posters" element={<BookingPosters />} />
        <Route path="/soccer-posters" element={<SoccerPosters />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/art-covers" element={<ArtCovers />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/music" element={<Music />} />
        <Route path="/work" element={<Work />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <section id="lets-talk">
        <Footer />
      </section>
    </Router>
    </>
  )
}

export default App
