type Props = { children: React.ReactNode }
import { cookies } from 'next/headers'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { redirect } from 'next/navigation'

const layout = async ({ children }: Props) => {
  const cookiesStore = cookies()
  const payload = await getPayload({
    config: configPromise,
  })
  const token = await (await cookiesStore).get('payload-token')
  console.log('token =====> ', token)

  const data = await fetch(`${process.env.SERVER_URL}/api/application-users/me`, {
    headers: {
      cookie: `payload-token=${token?.value}`,
    },
  })
  const json = await data.json()
  console.log('me =====> ', json)
  if (!json.user) {
    redirect('/login')
  }

  return <div>{children}</div>
}
export default layout
