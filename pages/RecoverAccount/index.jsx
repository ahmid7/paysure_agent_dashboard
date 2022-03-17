import React from 'react'
import tw from 'twin.macro'
import Header from '../../components/Header'
import { useState } from 'react'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Email } from '../../components/SvgIcons'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    const [EmailValue,setEmailValue] = useState('')

    const handleEmailValue = (e) => {
        setEmailValue(e.target.value)
    }
    const handleClick = () => {
        router.push('/RecoverAccount/changePassword')
    }
  return (
    <div tw="flex justify-center pt-14">
        <div tw='w-1/4'>
            <h2 tw='font-semibold text-xl '>Recover your account</h2>
            <form tw='flex flex-col gap-y-2 pt-7'>
                <label htmlFor='Email' tw='font-light text-black-soft text-sm'>
                    Email Address
                </label>
                
                <FormControl variant="outlined" >
                    <OutlinedInput
                        tw='text-xs'
                        id="outlined-adornment-weight"
                        size='small'
                        value={EmailValue}
                        onChange={handleEmailValue}
                        endAdornment={<InputAdornment position="end"><Email/></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                    />
                </FormControl>

                <Button 
                variant='contained'
                fullWidth
                onClick = { handleClick }
                tw='font-normal text-sm  bg-paysure-purple py-2 mt-6 normal-case'
                >Send Recovery link</Button>
            </form>
        </div>
    </div>
  )
}

export default Index

Index.getLayout = function PageLayout(page){
    return(
        <div>
            <Header/>
            {page}
        </div>
    )
}

