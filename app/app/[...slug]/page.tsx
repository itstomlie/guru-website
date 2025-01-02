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
      const deepLink = `com.itstomlie.Guruu://${slug}?token=${token}`
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
    <div>
      <h1>Dynamic Page</h1>
      <p>Slug: {slug}</p>
      <p>Token: {token}</p>
    </div>
  )
}

export default DynamicPage
