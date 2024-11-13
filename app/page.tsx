import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import DockLive from "@/components/dock-live"
import Features from "@/components/features"
import Hero from "@/components/hero"
import JoinGuruu from "@/components/join-guruu"
import Marquee3D from "@/components/marquee-verticle"
import UserFlow from "@/components/user-flow"
import DotPatternDemo2 from "@/components/waitlist"
import Waitlist from "@/components/waitlist"
import WhyGuruu from "@/components/why-guruu"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Features />
      <JoinGuruu />
      <UserFlow />
      <WhyGuruu />
      <Waitlist />
    </>
  )
}
