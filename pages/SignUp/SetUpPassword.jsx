import React from 'react'
import tw from 'twin.macro'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import SignInLogoSide from '../../components/SignInLogoSide'
import { useState } from 'react'
import { useRouter } from 'next/router';

const SetUpPassword = () => {

  const [ password, setPassword ] = useState('')
  const [ confirmPassword,setConfirmPassword ] = useState('')

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  const router = useRouter()

  const handleSubmit = () => {
    if(password != '' && (password === confirmPassword)){
        router.push('/SignUp/EmailVerification')
    }
  }

  return (
    <div tw='w-[30%]'>
        <h2 tw='font-semibold text-xl '>Set up password</h2>

        <form tw='pt-7'>
            <div tw='flex flex-col gap-y-1 pb-5'>
                <label htmlFor='Password' tw='font-light text-black-soft text-sm'>
                    Enter password
                </label>
                
                <FormControl variant="outlined">
                    <OutlinedInput
                        tw='text-xs'
                        id="outlined-adornment-weight"
                        size='small'
                        value={password}
                        onChange={handlePassword}
                        placeholder="*************"
                    />
                </FormControl>
            </div>

            <div tw='flex flex-col gap-y-1 pb-3'>
                <label htmlFor='re-enter-Password' tw='font-light text-black-soft text-sm'>
                    Confirm password
                </label>
                
                <FormControl variant="outlined">
                    <OutlinedInput
                        tw='text-xs'
                        id="outlined-adornment-weight"
                        size='small'
                        value= { confirmPassword }
                        onChange={handleConfirmPassword}
                        placeholder="*************"
                    />
                </FormControl>
            </div>

            <Button 
                variant='contained'
                fullWidth
                onClick = { handleSubmit }
                tw='font-normal text-sm  bg-paysure-purple py-3 mt-6 normal-case'
                >Create new password</Button>
        </form>
    </div>
  )
}

export default SetUpPassword


SetUpPassword.signUpLayout = function PageLayout(page){
    return(
        <div tw='flex'>
            <div tw="w-1/4">
                <SignInLogoSide />
            </div>
            <div tw='w-3/4 flex justify-center py-16'>
                {page}
            </div>
        </div>
    )
}
