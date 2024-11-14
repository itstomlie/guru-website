"use client"

import Image from "next/image"
import { Link } from "lucide-react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

import DockLive from "./dock-live"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

const features = [
  {
    title: "Personalized educational short videos",
    text: "Bite-sized educational content tailored to your interests and learning goals. Engage in informative videos across various subjects. Learn anywhere, anytime! 🎥 🧠",
  },
  {
    title: "Interactive learning",
    text: "To reinforce learning, Guruu incorporates quizzes, short essays, and problem-solving exercises. These activities helps you apply your newly acquired knowledge, enhancing retention and deepening understanding of the material. 📝✨",
  },
  {
    title: "Gamification with customizable characters, pets, mounts, & dojos",
    text: "You create and customize your avatar, collect pets and mounts, and design your personal &apos;dojo&apos; (learning space). Complete challenges and quizzes to level up your character, unlock new customizations, abilities, and content.",
  },
  {
    title: "&apos;Guruu UNIVERSE&apos;: Structured learning paths",
    text: "If you want a more structured way of learning, &apos;Guruu Universe&apos; has you covered. Discover hundreds of curated learning paths crafted by Institutions, teachers, and experts. ",
  },
]

const Features = () => {
  return (
    <div className="p-5 sm:p-10 mt-5 sm:mt-20">
      <section className="">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
          Features
        </h2>
        <div className="flex flex-row sm:flex-col items-center justify-center space-y-5 sm:space-y-10">
          <div className="w-3/4 sm:w-full">
            <Image
              src={"./Guruu Orange.svg"}
              width={200}
              height={200}
              alt="feature image"
            />
          </div>
          <div className="flex flex-col sm:flex-row max-w-[50%] sm:max-w-full space-y-5 sm:space-x-5">
            {features.map((feature) => {
              return (
                <div className="w-full sm:w-[50%] text-center px-4 sm:px-0 border border-white rounded-md p-5">
                  <h6 className="text-lg sm:text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
                    {feature.title}
                  </h6>
                  <p className="mt-4 text-md sm:text-lg text-neutral-600 dark:text-neutral-300">
                    {feature.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
