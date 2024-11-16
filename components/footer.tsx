"use client"

import Image from "next/image"

import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <div className="mt-24">
      <Separator />
      <section className="flex flex-col items-center py-12">
        <Image
          src={"/Guruu Orange.svg"}
          width={200}
          height={200}
          alt="Why Guruu image"
        />
        <small className="text-xs text-gray-300">
          © 2024 Guruu. All rights reserved.
        </small>
      </section>
    </div>
  )
}

export default Footer
