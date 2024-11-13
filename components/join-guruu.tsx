"use client"

import Image from "next/image"
import { Link } from "lucide-react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

import DockLive from "./dock-live"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

const JoinGuruu = () => {
  return (
    <div className="p-5 sm:p-10 mt-5 sm:mt-20">
      <section className="flex flex-row items-center justify-center space-y-5 sm:space-y-10">
        <div className="w-full text-start px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
            Unleash Your Educational Passion with Guruu! 🌟
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            Join Guruu's Edu Creator Partnership Program and transform your
            passion for education into a rewarding adventure! You'll gain the
            opportunity to design captivating learning experiences that resonate
            with students from primary school to university.
            <br />
            <br />
            By sharing your expertise, you'll be part of a global movement that
            empowers learners and enriches minds. Plus, you'll receive
            recognition and rewards for your creativity, helping you grow as an
            educational influencer!🎬🎓
          </p>
          <form
            className="mt-4 flex flex-col items-start justify-center gap-4 w-full mx-auto py-5 max-w-full "
            action="#"
            method="post"
          >
            <Input
              type="email"
              placeholder="naruto@gmail.com"
              className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] min-w-0 h-[45px] flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
              required
            />
            <Button
              className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
              size="lg"
            >
              Submit
            </Button>
            {/* <div className="w-full flex justify-center"> */}
            {/* <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
             Supported platforms ⚡️ 
          </p> */}

            {/* </div> */}
            {/* <p className=" text-sm sm:text-lg text-neutral-600 dark:text-neutral-300">
              Check us out on social media ⚡️
            </p>
            <DockLive /> */}
          </form>
        </div>

        <div className="w-3/4">
          <Image src={"./Guruu Orange.svg"} width={200} height={200} />
        </div>
      </section>
    </div>
  )
}

export default JoinGuruu
