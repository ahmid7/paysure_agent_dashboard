import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div tw="py-4 px-20 ">
      <Link href='/'>
        <Image src='/Images/Paysure__.png' width='90' height='25' alt='paysure-image-logo'/>
      </Link>
    </div>
  )
}

export default Header