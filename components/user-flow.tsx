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
    text: "Begin your adventure by signing up with Guruu. Use a username and password that you&apos;ll remember, and get ready to explore endless learning possibilities.",
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
    title: "Complete Interactive Quizzes",
    text: "After each video, test your understanding with fun and exciting quizzes. Level up your personalized character by mastering the content.",
  },
]

const UserFlow = () => {
  return (
    <div className="p-5 sm:p-10 mt-5 sm:mt-20">
      <section className="flex flex-row items-space justify-between space-x-5 sm:space-x-10">
        {userFlow.map((feature) => {
          return (
            <div className="w-full text-center px-4 sm:px-0 border border-white rounded-md p-5">
              <h6 className="text-lg sm:text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h6>
              <p className="mt-4 text-md sm:text-lg text-neutral-600 dark:text-neutral-300">
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
