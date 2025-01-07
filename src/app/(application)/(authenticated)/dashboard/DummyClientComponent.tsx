'use client'

import { useEffect } from 'react'

type Props = {}
const DummyClientComponent = (props: Props) => {
  useEffect(() => {
    async function getAllUsers() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/application-users`)
      const json = await res.json()
      console.log(json)
    }
    getAllUsers()
  }, [])

  return <div>DummyClientComponent</div>
}
export default DummyClientComponent
