import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/Contact.jsx'

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Nous écrire" title="Réservation & Contact" image="/img/reception.jpg" />
      <ContactForm />
    </>
  )
}
