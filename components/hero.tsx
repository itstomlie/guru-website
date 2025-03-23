"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import emailjs from "@emailjs/browser"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Hero = () => {
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
        message: "",
      })

      alert("Thank you. I will get back to you as soon as possible")
    } catch (error) {
      console.log(error)

      alert("Something went wrong, please try again")
    }
  }

  return (
    <section className="container flex min-h-[85dvh] flex-col items-center justify-center space-y-5 overflow-hidden md:flex-row md:space-x-10 md:space-y-0 ">
      <div className="z-10 order-2 w-full text-start sm:px-0 md:order-1 md:mt-10">
        <h1 className="lg:text-6xl mt-5 text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:mt-0">
          Tired of Doom Scrolling Without Learning Anything? 🚀
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
          Meet{" "}
          <span className="text-lg font-bold text-[#ff7a45]   md:text-xl">
            Guruu
          </span>{" "}
          — the social media app that will transforms your scrolling into
          smarter learning. Watch fun, bite-sized videos on topics you love —
          from science and languages to life hacks — and retain your knowledge
          with quick, interactive quizzes.
          <br />
          <br />
          It&apos;s time to stop wasting hours and start learning something new
          with every swipe.
        </p>
        <div className="full flex flex-row justify-center">
          <Link href="https://play.google.com/store/apps/details?id=com.itstomlie.Guruu">
            <Image
              src={"/images/google-play.webp"}
              alt="Google Play Image"
              width={300}
              height={300}
              className="h-[1/2] w-[3/5] md:w-[1/2]"
              style={{ height: "auto", objectFit: "cover" }}
            />
          </Link>
        </div>
        {/* <form
          className="mx-auto mt-3 flex w-full max-w-full flex-col items-start justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            value={form.email}
            placeholder="Enter your email"
            name="email"
            className="h-[45px] w-full flex-1 border border-neutral-300 text-center text-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff7a45] focus:ring-offset-2 dark:border-neutral-700 dark:text-neutral-100 dark:focus:ring-[#ff7a45]"
            required
            onChange={handleChange}
          />

          <Button type="submit" className="w-full text-lg shadow-lg" size="lg">
            🌟 Join the crowd on our waitlist!
          </Button>
        </form> */}
      </div>

      <div className="z-10 order-1 w-3/4 sm:w-full md:order-2">
        <Image
          src={"/images/features.png"}
          width={300}
          height={500}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          alt="Why Guruu image"
        />
      </div>
    </section>
  )
}

export default Hero
