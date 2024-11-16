"use client"

import Image from "next/image"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Hero = () => {
  return (
    <section className="container overflow-hidden flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-10 ">
      <div className="w-full text-start sm:px-0 order-2 md:order-1 md:mt-10 z-10">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 mt-5 md:mt-0">
          Revolutionize your learning journey! 🚀
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
          Guruu is a short-form video based educational platform that makes
          learning fun! Come explore a wide range of educational content on your
          favorite topics. From science and languages to everyday life tips —
          it&apos;s all here on your fingertips!
        </p>
        <form
          className="mt-3 flex flex-col items-start justify-center gap-4 w-full mx-auto max-w-full"
          action="#"
          method="post"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[45px] text-center text-lg flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7a45] dark:focus:ring-[#ff7a45]"
            required
          />
          <Button className="w-full text-lg" size="lg">
            🌟 Join the crowd on our waitlist!
          </Button>
        </form>
      </div>

      <div className="w-3/4 sm:w-full order-1 md:order-2 z-10">
        <Image
          src={"https://placehold.co/400"}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          alt="feature image"
        />
      </div>
    </section>
  )
}

export default Hero
