import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'

const SignInLogoSide = () => {
  return (
    <div tw='h-full w-1/4 fixed bg-purple-blue flex items-center justify-end pr-8'>
        <Image src='/Images/paysure__White.png' width='125' height='500' alt='paysure-image-logo'/>
    </div>
  )
}

export default SignInLogoSide