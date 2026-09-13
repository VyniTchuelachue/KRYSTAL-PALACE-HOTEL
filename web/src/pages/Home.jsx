import Hero from '../components/Hero.jsx'
import SectionPreviewGrid from '../components/SectionPreviewGrid.jsx'
import Welcome from '../components/Welcome.jsx'
import ExperienceBand from '../components/ExperienceBand.jsx'
import RoomsSplit from '../components/RoomsSplit.jsx'
import GoogleTestimonials from '../components/GoogleTestimonials.jsx'
import Experiences from '../components/Experiences.jsx'
import GalleryPreview from '../components/GalleryPreview.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionPreviewGrid />
      <Welcome />
      <ExperienceBand />
      <RoomsSplit />
      <GoogleTestimonials />
      <Experiences />
      <GalleryPreview />
      <CtaBanner />
    </>
  )
}
