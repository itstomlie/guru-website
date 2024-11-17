"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

import { Textarea } from "@/components/ui/textarea"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
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
    <section className="container flex flex-col items-center justify-center space-y-5 sm:space-y-10">
      <div className="w-full max-w-[600px] rounded-xl border border-[#ff7a45] bg-gradient-to-b p-8 px-4 text-center">
        <h1 className="lg:text-6xl text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
          If you&apos;re interested in collaborating or simply curious about{" "}
          <span className="text-lg font-bold text-[#ff7a45]   md:text-xl">
            Guruu
          </span>
          , we&apos;d love to hear from you! Reach out, and we&apos;ll get back
          to you in no time.
        </p>
        <form
          className="mx-auto mt-4 flex w-full max-w-full flex-col items-center justify-center gap-4 py-5"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="h-[45px] w-full min-w-0 flex-1 rounded-lg border border-neutral-300 text-lg text-neutral-900 dark:border-neutral-700 dark:text-neutral-100 sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px] "
            required
          />
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="h-[45px] w-full min-w-0 flex-1 rounded-lg border border-neutral-300 text-lg text-neutral-900 dark:border-neutral-700 dark:text-neutral-100 sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px] "
            required
          />
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="h-[45px] w-full min-w-0 flex-1 rounded-lg border border-neutral-300 text-lg text-neutral-900 dark:border-neutral-700 dark:text-neutral-100 sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px]"
          />
          <Button
            className="w-full text-lg shadow-lg sm:w-[300px] md:w-[350px] lg:w-[400px] lg:max-w-[400px]"
            size="lg"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
