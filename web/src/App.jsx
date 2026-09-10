import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import BookingBar from './components/BookingBar.jsx'
import Intro from './components/Intro.jsx'
import SectionPreviewGrid from './components/SectionPreviewGrid.jsx'
import Rooms from './components/Rooms.jsx'
import Dining from './components/Dining.jsx'
import Wellness from './components/Wellness.jsx'
import Events from './components/Events.jsx'
import Offers from './components/Offers.jsx'
import Reviews from './components/Reviews.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-ivory-50">
      <Navigation />
      <main>
        <Hero />
        <BookingBar />
        <Intro />
        <SectionPreviewGrid />
        <Rooms />
        <Dining />
        <Wellness />
        <Events />
        <Offers />
        <Reviews />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
