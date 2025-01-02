import { useEffect } from "react"
import { useRouter } from "next/router"

const DynamicPage = () => {
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    // If it's a mobile device, attempt to open the app via deep link
    if (isMobile) {
      window.location.href = `myapp://page/${slug?.join("/")}`
    }
  }, [slug])

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>
        If you are seeing this page, your app didn&apos;t open. Try contacting
        the developer.
      </p>
    </div>
  )
}

export default DynamicPage
