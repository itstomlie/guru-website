import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import DotPatternDemo2 from "@/components/contact"
import Contact from "@/components/contact"
import DockLive from "@/components/dock-live"
import Features from "@/components/features"
import Hero from "@/components/hero"
import JoinGuruu from "@/components/join-guruu"
import Marquee3D from "@/components/marquee-verticle"
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
    </>
  )
}
