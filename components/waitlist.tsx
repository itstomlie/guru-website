"use client"

import { Link } from "lucide-react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

import DockLive from "./dock-live"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

const Waitlist = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-5 sm:space-y-10">
      <div className="w-full text-center px-4 sm:px-0">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
          Get in Touch with the Guru Team
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
          If you&apos;re interested in collaborating or just curious about the
          project, feel free to reach us and we will get back to you promptly.
        </p>
        <form
          className="mt-4 flex flex-col items-center justify-center gap-4 w-full mx-auto py-5 max-w-full "
          action="#"
          method="post"
        >
          <Input
            type="text"
            placeholder="Your name"
            className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] min-w-0 h-[45px] flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
            required
          />
          <Input
            type="email"
            placeholder="naruto@gmail.com"
            className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] min-w-0 h-[45px] flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
            required
          />
          <Input
            type="text"
            placeholder="Your Message"
            className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] min-w-0 h-[45px] flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
            required
          />
          <Button
            className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
            size="lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Waitlist
