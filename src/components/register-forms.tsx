"use client"
import React, { useActionState, useEffect } from 'react'
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { register } from '@/services/auth/registerClient'
import { toast } from 'sonner'

const RegisterForm = () => {
    const [state,formAction,isloading]=useActionState(register,null);
    console.log("state",state.message)
    useEffect(()=>{
        if(state && !state.success && state.message){
           toast.error(state.message);
        }
    },[state])

  return (
        <form action={formAction}> 
            <FieldGroup>
                {/* name */}
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" name="name" type="text" placeholder="John Doe" required />
              </Field>
              {/* email */}
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
              {/* contact-number */}
              <Field>
                <FieldLabel htmlFor="Contact-Number">Contact-Number</FieldLabel>
                <Input
                  id="contactNumber"
                  type="number"
                  name="contactNumber"
                  placeholder="+088*********"
                  required
                />
              </Field>

              {/* password */}
              <Field>
                <Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" name="password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isloading}>
                    {isloading ? "Creating Account" : "Create Account"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
  )
}

export default RegisterForm;
