"use client"

import Image from "next/image"

const WhyGuruu = () => {
  return (
    <section className="container mt-5 p-5 sm:p-10 md:mt-10">
      <h2 className="lg:text-6xl order-1 text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
        Experience the Power of Personalized Learning with Guruu
      </h2>
      <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-10 md:flex-row">
        <div className="order-3 w-full text-start">
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
            At Guruu, we place personalized learning at the core of the
            experience, using advanced AI to recommend educational content that
            aligns with your unique interests. Whether you&apos;re exploring new
            scientific concepts, uncovering historical insights, or tackling
            complex math, Guruu ensures that each recommendation fosters
            curiosity and engagement.
            <br />
            <br />
            Dive into a world of limitless knowledge tailored to keep you
            learning and growing!
          </p>
          <ul className="list-inside list-disc py-5">
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

        <div className="order-2 mb-6 flex w-full justify-center md:mb-0">
          <Image
            src={"/images/hooked.svg"}
            width={0}
            height={0}
            style={{
              width: "50%",
              height: "auto",
              objectFit: "cover",
              marginBottom: "1.5rem",
            }}
            alt="Why Guruu image"
          />
        </div>
      </div>
    </section>
  )
}

export default WhyGuruu
