'use server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/server/auth'

export async function deleteAccount() {
  const payload = await getPayload({
    config: configPromise,
  })
  try {
    const user = await getUser()
    await payload.delete({
      collection: 'application-users',
      id: user.id,
    })

    // Clear all cookies
    const cookieStore = await cookies()
    cookieStore.delete('payload-token')

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Delete account error:', error)
    return { success: false, error: 'Failed to delete account' }
  }
}
