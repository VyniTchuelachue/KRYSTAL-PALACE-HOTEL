import Hero from '../components/Hero.jsx'
import SectionPreviewGrid from '../components/SectionPreviewGrid.jsx'
import GoogleTestimonials from '../components/GoogleTestimonials.jsx'
import Welcome from '../components/Welcome.jsx'
import Offers from '../components/Offers.jsx'
import GalleryPreview from '../components/GalleryPreview.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionPreviewGrid />
      <GoogleTestimonials />
      <Welcome />
      <Offers />
      <GalleryPreview />
      <CtaBanner />
    </>
  )
}
