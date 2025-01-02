"use client"

import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

// Correct import for App Router

const DynamicPage = () => {
  const { slug } = useParams() // Use useParams to capture the dynamic slug
  const router = useRouter()

  useEffect(() => {
    // Handle redirection or deep linking for mobile
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
    if (isMobile && slug) {
      window.location.href = `myapp://${slug}` // Deep link to app
    }
  }, [slug])

  if (!slug) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}

export default DynamicPage
