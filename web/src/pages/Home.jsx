import Hero from '../components/Hero.jsx'
import SectionPreviewGrid from '../components/SectionPreviewGrid.jsx'
import Welcome from '../components/Welcome.jsx'
import RoomsTeaser from '../components/RoomsTeaser.jsx'
import Dining from '../components/Dining.jsx'
import Wellness from '../components/Wellness.jsx'
import Reviews from '../components/Reviews.jsx'
import Events from '../components/Events.jsx'
import Offers from '../components/Offers.jsx'
import GalleryPreview from '../components/GalleryPreview.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionPreviewGrid />
      <Welcome />
      <RoomsTeaser />
      <Dining />
      <Wellness />
      <Reviews />
      <Events />
      <Offers />
      <GalleryPreview />
      <CtaBanner />
    </>
  )
}
