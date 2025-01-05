'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

type Props = {}
const LoadingButton = (props: Props) => {
  const { pending } = useFormStatus()
  return <Button>{pending ? 'Loading...' : 'Submit'}</Button>
}
export default LoadingButton
