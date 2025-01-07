'use server'
import { getPayload } from 'payload'
import zod from 'zod'
import configPromise from '@payload-config'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const registerSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(3),
})

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const register = async (prevState: any, formData: FormData) => {
  const payload = await getPayload({
    config: configPromise,
  })
  const validatedFields = registerSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: 'Invalid credentials',
      success: null,
    }
  }
  const isEmailTaken = await payload.find({
    collection: 'application-users',
    where: {
      email: {
        equals: validatedFields.data.email,
      },
    },
  })
  if (isEmailTaken.totalDocs > 0) {
    return {
      errors: 'Email already exists',
      success: null,
    }
  }

  const newUser = await payload.create({
    collection: 'application-users',
    data: {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    },
  })

  const res = await payload.login({
    collection: 'application-users',
    data: {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    },
  })

  const token = await res?.token
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'payload-token',
    value: token!,
    httpOnly: true, //process.env.NODE_ENV === 'production',
    path: '/',
  })

  redirect('/dashboard')

  return {
    errors: null,
    success: 'User registered successfully',
  }
  // Add your logic here
}
