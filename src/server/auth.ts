'use server'

import { cookies } from 'next/headers'

export async function getUser() {
  const cookiesStore = cookies()

  const token = await (await cookiesStore).get('payload-token')

  const data = await fetch(`${process.env.SERVER_URL}/api/application-users/me`, {
    headers: {
      cookie: `payload-token=${token?.value}`,
    },
  })
  const json = await data.json()
  return json?.user
}
