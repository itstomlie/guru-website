"use client"

import Image from "next/image"
import { Link } from "lucide-react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

import DockLive from "./dock-live"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

const userFlow = [
  {
    icon: "",
    title: "Create Your Account",
    text: `Begin your adventure by signing up with Guruu. Use a username and password that you'll remember, and get ready to explore endless learning possibilities.`,
  },
  {
    title: "Set Your Preferences",
    text: "Tell us what excites you! Choose your favorite topics and learning goals to help us customize your educational journey with Guruu.",
  },
  {
    title: "Watch Educational Videos",
    text: "Dive into a world of knowledge by watching engaging videos that match your interests. Each video boosts your learning experience and curiosity.",
  },
  {
    title: "Interactive Quizzes",
    text: "After each video, test your understanding with fun and exciting quizzes. Level up your character by mastering the content.",
  },
]

const UserFlow = () => {
  return (
    <div className="container mt-5 p-5 sm:p-10 md:mt-10">
      <section className="flex flex-col items-stretch justify-between space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        {userFlow.map((feature, index) => {
          return (
            <div
              key={index}
              className="w-full rounded-md border border-black p-5 px-4 text-center dark:border-white"
            >
              <h6 className="text-lg font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-xl">
                {feature.title}
              </h6>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 sm:text-lg">
                {feature.text}
              </p>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default UserFlow
