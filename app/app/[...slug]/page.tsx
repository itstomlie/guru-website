"use client"

import { useEffect } from "react"
import { useParams, useSearchParams } from "next/navigation"

const DynamicPage = () => {
  const { slug } = useParams()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
    if (isMobile && slug) {
      const deepLink = `guruu://${slug}?token=${token}`
      window.location.href = deepLink
    }
  }, [slug, token])

  if (!slug) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>Password Reset Request Received</h1>
      <p>You will be redirected to the app in a moment.</p>
      <br />
      <p style={{ fontSize: "3rem" }}>Thank you for using Guruu!</p>
    </div>
  )
}

export default DynamicPage
