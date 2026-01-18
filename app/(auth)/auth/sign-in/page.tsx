import SignInFormClient from '@/features/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
        <Image src={"/login2.svg"} alt="Login-Image" height={400} 
        width={400}
        className='m-6 object-cover'
        />
        <SignInFormClient/>
    </>
  )
}

export default SignInPage