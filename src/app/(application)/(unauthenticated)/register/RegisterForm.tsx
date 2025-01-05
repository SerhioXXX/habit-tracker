'use client'
import React, { useActionState } from 'react'
import { register } from './_actions'
import LoadingButton from '@/components/custom/LoadingButton'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

type Props = {}
type State = {
  errors: string | null
  success: string | null
}
const initialState: State = {
  errors: null,
  success: null,
}

function RegisterForm({}: Props) {
  const [state, formAction] = useActionState(register, initialState)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Fill in the form to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {state?.errors && <p className="text-red-600">{state.errors}</p>}
            {state?.success && <p className="text-green-600">{state.success}</p>}
            <LoadingButton />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterForm
