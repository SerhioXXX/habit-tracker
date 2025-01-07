import { redirect } from 'next/navigation'
import { getUser } from '@/server/auth'
import Navigation from '@/components/custom/Navigation'

type Props = { children: React.ReactNode }

const layout = async ({ children }: Props) => {
  const user = await getUser() // проверяем по запросу "me" есть ли пользователь (прокидивая payload-token)

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="w-full mx-auto border">
      {children}
      <Navigation />
    </div>
  )
}
export default layout
