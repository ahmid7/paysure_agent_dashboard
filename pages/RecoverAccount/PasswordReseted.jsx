import React from 'react'
import Header from '../../components/Header'
import Button from '@mui/material/Button'
import tw from 'twin.macro'
import { useRouter } from 'next/router';

const PasswordReseted = () => {
  const router = useRouter()
 
  const handleClick = () => {
    router.push('/') 
  }

  return (
    <div tw="flex justify-center pt-20">
       <div tw='w-1/4 text-center'>
            <div tw='font-semibold text-xl'>
                <h2 tw=''>Hello</h2>
                <p tw="py-1">Ozenuaoluwatobi@gmail.com</p>
            </div>
            <p tw='py-2 text-sm'>Your account has been succesfully reset</p>


            <Button 
            variant='contained'
            onClick = {handleClick}
            tw='font-normal text-sm  bg-paysure-purple py-2 mt-5 normal-case'
            >
                Login to your account
            </Button>
        </div>
    </div>
  )
}

export default PasswordReseted


PasswordReseted.getLayout = function PageLayout(page){
    return(
        <div>
            <Header/>
            {page}
        </div>
    )
}

