"use client"

import Image from "next/image"
import { Link } from "lucide-react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

import DockLive from "./dock-live"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

const Hero = () => {
  return (
    <div className="p-5 sm:p-10 mt-5 sm:mt-20 overflow-hidden">
      <section className="flex flex-col items-center justify-center space-y-5 sm:space-y-10">
        <div className="w-full text-start px-4 sm:px-0 order-2 sm:order-1">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
            Revolutionize your learning journey! 🚀
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            Guruu is a shortform-video based educational platform that makes
            learning fun! Come explore a wide range of educational content on
            your favorite topics. From science and languages to everyday life
            tips — it's all here on your fingertips!
          </p>
          <form
            className="mt-4 flex flex-col items-start justify-center gap-4 w-full mx-auto py-5 max-w-full"
            action="#"
            method="post"
          >
            <Input
              type="email"
              placeholder="naruto@gmail.com"
              className="w-full h-[45px] flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
              required
            />
            <Button className="w-full" size="lg">
              Submit
            </Button>
          </form>
        </div>

        <div className="w-3/4 sm:w-full order-1 sm:order-2">
          <Image src={"./Guruu Orange.svg"} width={200} height={200} />
        </div>
      </section>
    </div>
  )
}

export default Hero
