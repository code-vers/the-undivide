import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import MapSection from "@/components/contact/MapSection"
import FooterCTA from "@/components/contact/FooterCTA"

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      <ContactHero />
      <ContactForm />
      <MapSection />
      <FooterCTA />
    </div>
  )
}
