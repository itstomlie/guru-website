"use client"

import { useActionState, useState } from "react"
import Image from "next/image"

import { createWaitlist } from "@/lib/api/createWaitlist"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Hero = () => {
  // const [state, formAction] = useActionState(createWaitlist, null)

  return (
    <section className="container flex flex-col items-center justify-center space-y-5 overflow-hidden md:flex-row md:space-x-10 md:space-y-0 ">
      <div className="z-10 order-2 w-full text-start sm:px-0 md:order-1 md:mt-10">
        <h1 className="lg:text-6xl mt-5 text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:mt-0">
          Revolutionize your learning journey! 🚀
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
          Guruu is a short-form video based educational platform that makes
          learning fun! Come explore a wide range of educational content on your
          favorite topics. From science and languages to everyday life tips —
          it&apos;s all here on your fingertips!
        </p>
        <form
          className="mx-auto mt-3 flex w-full max-w-full flex-col items-start justify-center gap-4"
          // action={formAction}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="h-[45px] w-full flex-1 border border-neutral-300 text-center text-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff7a45] focus:ring-offset-2 dark:border-neutral-700 dark:text-neutral-100 dark:focus:ring-[#ff7a45]"
            required
          />

          <Button type="submit" className="w-full text-lg" size="lg">
            🌟 Join the crowd on our waitlist!
          </Button>
        </form>
      </div>

      <div className="z-10 order-1 w-3/4 sm:w-full md:order-2">
        <Image
          src={"/images/features.png"}
          width={300}
          height={500}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          alt="Why Guruu image"
        />
      </div>
    </section>
  )
}

export default Hero
