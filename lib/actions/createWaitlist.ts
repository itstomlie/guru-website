import { BaseApi } from "../axios"

export async function createWaitlist(prevState: any, formData: FormData) {
  "use server"

  const email = formData.get("email")
  const name = formData.get("name")
  const message = formData.get("message")
  const creator = formData.get("creator")

  try {
    console.log("🚀 ~ createWaitlist ~ email:", email)
    await BaseApi.post("/users/waitlists", { email, name, message, creator })
    return { success: true }
  } catch (error: any) {
    return { error: error.response.data.message }
  }
}
