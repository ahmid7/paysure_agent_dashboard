import React from 'react'
import tw from 'twin.macro'
import AccountVerificationLeftSide from '../../components/AccountVerificationLeftSide'
import { Button} from '@mui/material'
import {useRouter } from 'next/router'

const VerificationSuccess = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  } 
  return (
    <div tw='text-center w-[34%] py-14'>
        <h2 tw='pt-4 font-semibold text-xl'>Verification Sucess</h2>
        <p tw='text-sm pt-4'>
          Your account has been created you can now use Paysure services
        </p>

        {/* button redirect to  home page */}
        <Button
        variant='contained'
        onClick ={ handleClick }
        tw='font-normal text-sm  bg-paysure-purple py-3 mt-6 normal-case'
        >
          Login to dashboard
        </Button>
    </div>
  )
}

export default VerificationSuccess


// layout  
VerificationSuccess.accountVerificationLayout = function PageLayout(page){
  return(
      <div tw='flex'>
          <div tw="w-1/4">
              <AccountVerificationLeftSide verified = { true }/>
          </div>
          <div tw='w-3/4 flex justify-center py-16'>
              {page}
          </div>
      </div>
  )
}