"use client"

import Image from "next/image"
import { Link } from "lucide-react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

import DockLive from "./dock-live"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

const WhyGuruu = () => {
  return (
    <div className="p-5 sm:p-10 mt-5 sm:mt-20">
      <section className="flex flex-col items-center justify-center space-y-5 sm:space-y-10">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 order-1">
          Experience the Power of Personalized Learning with Guru
        </h2>
        <div className="w-full text-start order-3">
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            At Guru, personalized learning is at the heart of what we do. Our
            platform uses advanced AI to tailor educational content to each
            student&apos;s unique interests and pace. Whether you&apos;re in
            primary school discovering science, a teenager diving into history,
            or a university student exploring complex mathematics, Guru ensures
            a learning experience that&apos;s just right for you. By analyzing
            your preferences and performance, our intelligent system recommends
            videos that not only cater to your academic needs but also ignite
            your curiosity and passion. This approach transforms learning into
            an engaging, interactive journey that accelerates your potential and
            maximizes your growth. Dive into a world where education is an
            adventure tailored just for you!
          </p>
          <ul className="list-disc list-inside py-5">
            <li>
              <b>Enhanced Engagement:</b> Students stay motivated with content
              that matches their interests
            </li>
            <li>
              <b>Improved Retention:</b> Interactive quizzes reinforce learning,
              making knowledge stick
            </li>
            <li>
              <b>Adaptive Progression:</b> Learning paths adjust to individual
              pace, ensuring no one is left behind
            </li>
            <li>
              <b>Limitless Exploration:</b> AI introduces new topics, expanding
              horizons beyond the standard curriculum
            </li>
            <li>
              <b>Empowered Students:</b> Personalized content fosters confidence
              in learners, promoting self-driven education
            </li>
          </ul>
        </div>

        <div className="w-full order-2">
          <Image
            src={"/Guruu Orange.svg"}
            width={200}
            height={200}
            alt="Why Guruu image"
          />
        </div>
      </section>
    </div>
  )
}

export default WhyGuruu
