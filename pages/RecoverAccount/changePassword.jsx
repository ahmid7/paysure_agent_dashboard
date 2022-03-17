import React from 'react'
import tw from 'twin.macro'
import { useState } from 'react'
import Header from '../../components/Header'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import { PasswordLock } from '../../components/SvgIcons'
import { useRouter } from 'next/router';


const ChangePassword = () => {
  const [ password, setPassword ] = useState('')
  const [ confirmPassword,setConfirmPassword ] = useState('')

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  const router = useRouter()


  //handle click button
  const handleSubmit = () => {
    if(password != '' && (password === confirmPassword)){
        router.push('/RecoverAccount/PasswordReseted')
    }
  }

  

  return (
    <div tw="flex justify-center pt-14">
        <div tw='w-1/4'>
            <h2 tw='font-semibold text-xl '>Create new password</h2>
            <form tw='pt-7'>
                <div tw='flex flex-col gap-y-1 pb-5'>
                    <label htmlFor='Password' tw='font-light text-black-soft text-sm'>
                        Enter new password
                    </label>
                    
                    <FormControl variant="outlined">
                        <OutlinedInput
                            tw='text-xs'
                            id="outlined-adornment-weight"
                            size='small'
                            value={password}
                            onChange={handlePassword}
                            endAdornment={<InputAdornment position="end"><PasswordLock/></InputAdornment>}
                            placeholder="*************"
                        />
                    </FormControl>
                </div>

                <div tw='flex flex-col gap-y-1 pb-3'>
                    <label htmlFor='re-enter-Password' tw='font-light text-black-soft text-sm'>
                        Confirm new password
                    </label>
                    
                    <FormControl variant="outlined">
                        <OutlinedInput
                            tw='text-xs'
                            id="outlined-adornment-weight"
                            size='small'
                            value= { confirmPassword }
                            onChange={handleConfirmPassword}
                            endAdornment={<InputAdornment position="end"><PasswordLock/></InputAdornment>}
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
    </div>
  )
}

export default ChangePassword


ChangePassword.getLayout = function PageLayout(page){
    return(
        <div>
            <Header/>
            {page}
        </div>
    )
}
