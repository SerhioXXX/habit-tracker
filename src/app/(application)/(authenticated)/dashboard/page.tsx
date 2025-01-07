import { getUser } from '@/server/auth'
import DummyClientComponent from './DummyClientComponent'

type Props = {}
const Dashboard = async (props: Props) => {
  const user = await getUser()
  return (
    <div>
      {' '}
      <h1>Hello: {user?.email}</h1>
      <DummyClientComponent />
    </div>
  )
}
export default Dashboard
