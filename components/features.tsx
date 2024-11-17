"use client"

import Image from "next/image"

const features = [
  {
    title: "Personalized educational short videos",
    text: "Bite-sized educational content tailored to your interests and learning goals. Engage in informative videos across various subjects. Learn anywhere, anytime! 🎥 🧠",
  },
  {
    title: "Interactive learning",
    text: (
      <>
        To reinforce learning, &apos;
        <span className="text-md mt-4 text-[#ff7a45] sm:text-lg">
          Guruu
        </span>{" "}
        incorporates quizzes, short essays, and problem-solving exercises. These
        activities helps you apply your newly acquired knowledge, enhancing
        retention and deepening understanding of the material. 📝✨
      </>
    ),
  },
  {
    title: "Gamification with customizable characters, pets, mounts, & dojos",
    text: `You create and customize your avatar, collect pets and mounts, and design your personal 'dojo' (learning space). Complete challenges and quizzes to level up your character, unlock new customizations, abilities, and content.`,
  },
  {
    title: (
      <>
        &apos;
        <span className="t text-lg  font-semibold leading-tight text-[#ff7a45]  sm:text-xl">
          GURUU
        </span>{" "}
        UNIVERSE&apos;: Structured learning paths
      </>
    ),
    text: (
      <>
        If you want a more structured way of learning, &apos;
        <span className="text-md mt-4 text-[#ff7a45] sm:text-lg">
          Guruu
        </span>{" "}
        Universe&apos; has you covered. Discover hundreds of curated learning
        paths crafted by Institutions, teachers, and experts.
      </>
    ),
  },
]

const Features = () => {
  return (
    <div className="container mt-5 p-5 sm:p-10 md:mt-10">
      <section className="">
        <h2 className="lg:text-6xl text-center text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl ">
          Features
        </h2>

        <div className="mt-5 flex flex-col items-center justify-center space-y-5 sm:space-y-10 md:flex-row md:space-x-10 ">
          <div className="z-10 order-1 mb-6 w-full md:mb-0">
            <Image
              src={"/images/hero.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              alt="feature image"
            />
          </div>
          <div className="order-2 flex max-w-full flex-col space-y-5 md:max-w-[50%] md:space-x-0">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="w-full rounded-md border border-black p-5 px-4 text-center dark:border-white  "
                >
                  <h6 className="text-lg font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-xl">
                    {feature.title}
                  </h6>
                  <p className="text-md mt-4 text-neutral-600 dark:text-neutral-300 sm:text-lg">
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
