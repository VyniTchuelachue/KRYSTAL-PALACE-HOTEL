import PageHeader from '../components/PageHeader.jsx'
import Rooms from '../components/Rooms.jsx'

export default function Chambres() {
  return (
    <>
      <PageHeader eyebrow="Hébergement" title="Chambres & Suites" image="/img/nav-suite-meugang.jpg" />
      <Rooms />
    </>
  )
}
