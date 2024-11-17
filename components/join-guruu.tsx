"use client"

import { useState } from "react"
import Image from "next/image"
import emailjs from "@emailjs/browser"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const JoinGuruu = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    await e.preventDefault()

    try {
      if (!form.email) {
        alert("Please fill in your email")
        return
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Tommy",
          from_email: form.email,
          to_email: "contactguruu.id@gmail.com",
          message: form.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY }
      )

      setForm({
        name: "",
        email: "",
        message: "I'm interested to be a Creator Partner",
      })

      alert("Thank you. I will get back to you as soon as possible")
    } catch (error) {
      console.log(error)

      alert("Something went wrong, please try again")
    }
  }

  return (
    <section className="container mt-5 p-5 sm:p-10 md:mt-10">
      <h2 className="lg:text-6xl text-center text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
        Unleash Your Educational Passion with{" "}
        <span className="lg:text-6xl text-2xl font-semibold   text-[#ff7a45] sm:text-4xl">
          Guruu
        </span>
        ! 🌟
      </h2>
      <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-10 md:mt-10 md:flex-row md:space-x-10">
        <div className="order-2 w-full text-start md:order-1">
          <p className="order-3 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Join{" "}
            <span className="text-lg font-bold text-[#ff7a45]   md:text-xl">
              Guruu
            </span>
            &apos;s Edu Creator Partnership Program and transform your passion
            for education into a rewarding adventure! You&apos;ll gain the
            opportunity to design captivating learning experiences that resonate
            with students from primary school to university.
            <br />
            <br />
            By sharing your expertise, you&apos;ll be part of a global movement
            that empowers learners and enriches minds. Plus, you&apos;ll receive
            recognition and rewards for your creativity, helping you grow as an
            educational influencer! 🎬🎓
          </p>
          <form
            className="mx-auto flex w-full max-w-full flex-col items-start justify-center gap-4 py-5 "
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="h-[45px] w-full min-w-0 flex-1 rounded-l-lg border border-neutral-300 text-center text-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff7a45] focus:ring-offset-2 dark:border-neutral-700 dark:text-neutral-100 dark:focus:ring-[#ff7a45]"
              required
            />
            <Button className="w-full text-lg shadow-lg" size="lg">
              🤝 Become a creator partner with us!
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

        <div className="order-1 flex w-full justify-center md:mb-0">
          <Image
            src={"/images/online_video.svg"}
            width={0}
            height={0}
            style={{
              width: "80%",
              height: "auto",
              objectFit: "cover",
              marginBottom: "1.5rem",
            }}
            alt="Join Guruu image"
          />
        </div>
      </div>
    </section>
  )
}

export default JoinGuruu
