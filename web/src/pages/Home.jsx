import Hero from '../components/Hero.jsx'
import AmenitiesStrip from '../components/AmenitiesStrip.jsx'
import FeatureSplit from '../components/FeatureSplit.jsx'
import GoogleTestimonials from '../components/GoogleTestimonials.jsx'
import GalleryPreview from '../components/GalleryPreview.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { homeFeatures } from '../data/content.js'

export default function Home() {
  return (
    <>
      <Hero />
      <AmenitiesStrip />
      {homeFeatures.map((feature) => (
        <FeatureSplit key={feature.id} {...feature} />
      ))}
      <GoogleTestimonials />
      <GalleryPreview />
      <CtaBanner />
    </>
  )
}
