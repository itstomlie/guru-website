import Contact from "@/components/contact"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import JoinGuruu from "@/components/join-guruu"
import UserFlow from "@/components/user-flow"
import WhyGuruu from "@/components/why-guruu"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Features />
      <JoinGuruu />
      <UserFlow />
      <WhyGuruu />
      <Contact />
      <Footer />
    </>
  )
}
