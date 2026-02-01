/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useActionState, useEffect } from 'react'
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { registerClient } from '@/services/auth/registerClient'



const RegisterForm = () => {
    const [state,formAction,isloading]=useActionState(registerClient,null);

      const getFieldError=(fieldName:string)=>{
        if(state && state.errors){
          const error=state.errors.find((err:any)=>err.field===fieldName)
          return error?.message;
        }else{
          return null;
        }
  }
  console.log(state)
    // useEffect(()=>{
    //     if(state && !state.sucess && state.message){
    //        toast.error(state.message);
    //     }

    // },[state])

  return (
        <form action={formAction}> 
            <FieldGroup>
                {/* name */}
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" name="name" type="text" placeholder="Your name" />
                {
                  getFieldError("name") && (
                    <FieldDescription className='text-red-600'>
                      {getFieldError("name")}
                    </FieldDescription>
                  )
                }
              </Field>
              {/* email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                />
                  {
                  getFieldError("email") && (
                    <FieldDescription className='text-red-600'>
                      {getFieldError("email")}
                    </FieldDescription>
                  )
                }
              </Field>
              {/* contact-number */}
              <Field>
                <FieldLabel htmlFor="Contact-Number">Contact-Number</FieldLabel>
                <Input
                  id="contactNumber"
                  type="number"
                  name="contactNumber"
                  placeholder="+088*********"
                />
                                {
                  getFieldError("contactNumber") && (
                    <FieldDescription className='text-red-600'>
                      {getFieldError("contactNumber")}
                    </FieldDescription>
                  )
                }
              </Field>

              {/* password */}
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" name="password" type="password" />
                                                    {
                  getFieldError("password") && (
                    <FieldDescription className='text-red-600'>
                      {getFieldError("password")}
                    </FieldDescription>
                  )
                }
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirmPassword" name="confirmPassword" type="password"/>
                                                                        {
                  getFieldError("confirmPassword") && (
                    <FieldDescription className='text-red-600'>
                      {getFieldError("confirmPassword")}
                    </FieldDescription>
                  )
                }
                  </Field>
                </Field>
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
