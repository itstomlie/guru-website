"use client"

import Image from "next/image"

const WhyGuruu = () => {
  return (
    <section className="container p-5 sm:p-10 mt-5 md:mt-10">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 order-1">
        Experience the Power of Personalized Learning with Guruu
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 sm:space-y-10">
        <div className="w-full text-start order-3">
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            At Guruu, we place personalized learning at the core of the
            experience, using advanced AI to recommend educational content that
            aligns with your unique interests. Whether you're exploring new
            scientific concepts, uncovering historical insights, or tackling
            complex math, Guruu ensures that each recommendation fosters
            curiosity and engagement.
            <br />
            <br />
            Dive into a world of limitless knowledge tailored to keep you
            learning and growing!
          </p>
          <ul className="list-disc list-inside py-5">
            <li>
              <b>Enhanced Engagement:</b> AI-recommended content keeps students
              motivated with material aligned to their interests.
            </li>
            <li>
              <b>Improved Retention:</b> Interactive quizzes reinforce learning,
              helping knowledge stick.
            </li>
            <li>
              <b>Limitless Exploration:</b> Expand your horizon by exploring
              diverse topics, broadening knowledge and sparking curiosity.
            </li>
            <li>
              <b>Gamified Motivation:</b> Quizzes, achievements, and rewards
              specifically designed to boost your motivation, making learning
              fun and engaging.
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
      </div>
    </section>
  )
}

export default WhyGuruu
