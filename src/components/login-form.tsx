/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { useActionState } from 'react'
import { loginUser } from '@/services/auth/loginUser'

const LoginForm = () => {
  const [state,formAction,isloading]=useActionState(loginUser,null);
  console.log("state",state,isloading)
  return (
        <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" disabled={isloading}>
                  {isloading ? "Logging in...." : "Login"}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/register">Register Now</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
  )
}

export default LoginForm
