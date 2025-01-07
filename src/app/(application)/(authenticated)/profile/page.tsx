import { getUser } from '@/server/auth'
import ClientProfile from './ClientProfile'

type Props = {}
const ProfilePage = async (props: Props) => {
  const user = await getUser()
  return <ClientProfile user={user} />
}
export default ProfilePage
