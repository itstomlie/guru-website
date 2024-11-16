"use client"

import { Textarea } from "@/components/ui/textarea"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Contact = () => {
  return (
    <section className="container flex flex-col items-center justify-center space-y-5 sm:space-y-10">
      <div className="w-full max-w-[600px] rounded-xl border border-[#ff7a45] bg-gradient-to-b p-8 px-4 text-center">
        <h1 className="lg:text-6xl text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
          If you&apos;re interested in collaborating or simply curious about
          Guruu, we&apos;d love to hear from you! Reach out, and we&apos;ll get
          back to you in no time.
        </p>
        <form
          className="mx-auto mt-4 flex w-full max-w-full flex-col items-center justify-center gap-4 py-5"
          action="#"
          method="post"
        >
          <Input
            type="text"
            placeholder="Your name"
            className="h-[45px] w-full min-w-0 flex-1 rounded-lg border border-neutral-300 text-lg text-neutral-900 dark:border-neutral-700 dark:text-neutral-100 sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px] "
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            className="h-[45px] w-full min-w-0 flex-1 rounded-lg border border-neutral-300 text-lg text-neutral-900 dark:border-neutral-700 dark:text-neutral-100 sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px] "
            required
          />
          <Textarea
            placeholder="Your Message"
            className="h-[45px] w-full min-w-0 flex-1 rounded-lg border border-neutral-300 text-lg text-neutral-900 dark:border-neutral-700 dark:text-neutral-100 sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px]"
          />
          <Button
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px]"
            size="lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
