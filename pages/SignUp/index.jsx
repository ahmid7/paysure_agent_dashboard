import React from 'react'
import tw from 'twin.macro'
import SignInLogoSide from '../../components/SignInLogoSide'
import { 
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    TextField,
    Button
 } from '@mui/material' 
 import { useRouter } from 'next/router';

const Index = () => {
    
  const router = useRouter()
  const handleSignUpButton = () => {
    router.push('/SignUp/SetUpPassword')
  }
  return (
    <div>
        <h2 tw='font-semibold text-xl'> Sign up as an agent</h2>

        <div>
            <FormControl tw="flex flex-row items-center">
                <FormLabel id="demo-controlled-radio-buttons-group" tw="pr-2">Sign up as: </FormLabel>
                <RadioGroup
                    defaultValue="Agent"
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    tw="flex flex-row"
                >
                    <FormControlLabel value="Super Agent" control={<Radio size='small'/>} label="Super Agent" />
                    <FormControlLabel value="Agent" control={<Radio size='small'/>} label="Agent" />
                </RadioGroup>
            </FormControl>
        </div>

        <div tw='flex flex-col gap-y-4'>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    First name
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="John"
                />
            </div>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    Last name
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="Snow"
                />
            </div>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    Phone Number
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="09014386584"
                />
            </div>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    Email
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="johnsnow@gmail.com"
                />
            </div>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    Bvn
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="2012345678"
                />
            </div>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    Business Name
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="John snow enterprise"
                />
            </div>

            <div>
                <label tw='text-base font-normal text-black-soft'>
                    Business Address
                </label>
                <TextField 
                tw="mt-1"
                fullWidth 
                size='small'
                placeholder="10th Avenue, Bankry street"
                />
            </div>

            <Button
            variant='contained'
            onClick = {handleSignUpButton}
            tw='font-normal text-sm  bg-paysure-purple py-2 mt-6 normal-case'
            >
                SignUp
            </Button>
        </div>


    </div>
  )
}

export default Index

Index.signUpLayout = function PageLayout(page){
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
