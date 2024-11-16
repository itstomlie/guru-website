import { BaseApi } from "../axios"

interface WaitlistData {
  name?: string
  email: string
  message?: string
  creator?: string
}

export const createWaitlist = async (data: WaitlistData) => {
  console.log("🚀 ~ createWaitlist ~ data:", data)
  try {
    const response = await BaseApi.post("/users/waitlists", data)
    return response.data
  } catch (error) {
    console.error("Error creating waitlist:", error)
  }
}
