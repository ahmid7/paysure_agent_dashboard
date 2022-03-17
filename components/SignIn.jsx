import React,{ useState } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {PhoneIcon,EyeIcon} from './SvgIcons'
import { useRouter } from 'next/router'


const SignIn = () => {
  const router = useRouter()

  const [emailValue,setEmailValue] = useState('')
  const [passwordValue,setPasswordValue] = useState('')

  const handleEmailValue = (e) => {
    setEmailValue(e.target.value)
  }
  const handlePasswordValue = (e) => {
    setPasswordValue(e.target.value)
  }

  const handleButtonCreateNewAccount = (e) => {
    router.push('/SignUp')
  }

  return (
    <div tw='w-2/6'>
      <h2 tw='font-semibold text-2xl '>Login to your Dashboard</h2>

      <form tw='py-8 '>
        <div tw='pb-4 font-normal '>
          <p tw='text-black-soft pb-2'>Email</p>
          <TextField 
            fullWidth
            value = { emailValue }
            onChange = { handleEmailValue }
            size='small'
            InputProps = {{
              endAdornment:<InputAdornment position="end"><PhoneIcon/></InputAdornment>
            }}
            />
        </div>

        <div tw=''>
          <p tw='text-black-soft pb-2'>Password</p>
          <TextField 
          fullWidth 
          value = { passwordValue }
          onChange = { handlePasswordValue }
          size='small'
          InputProps = {{
            endAdornment:<InputAdornment position="end"><EyeIcon/></InputAdornment>
          }}
          />
        </div>

        <div tw='flex justify-between items-center pt-2'>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked  size="small"/>} label={ <Typography tw='font-normal text-sm'>Remember Me</Typography> } />
          </FormGroup>


            <Link href='/RecoverAccount'>
              <a tw='font-normal underline text-paysure-purple cursor-pointer'>Forgotten password</a>
            </Link>

        </div>

        <div tw='mt-6'>
          <Button variant = "contained" fullWidth tw='font-normal text-sm  bg-paysure-purple py-3'>Login to your account </Button>
        </div>
      </form>

      <div tw="mt-1 text-center">
        <Link href="/SignUp">
          <a>Create a new account</a>
        </Link>
      </div>
    
    </div>
  )
}

export default SignIn