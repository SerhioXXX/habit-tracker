import { redirect } from 'next/navigation'
import { getUser } from '@/server/auth'

type Props = { children: React.ReactNode }

const layout = async ({ children }: Props) => {
  const user = await getUser() // проверяем по запросу "me" есть ли пользователь (прокидивая payload-token)

  if (!user) {
    redirect('/login')
  }

  return <div>{children}</div>
}
export default layout
