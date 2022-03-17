import React,{ useState } from 'react'
import tw from 'twin.macro'
import AccountVerificationLeftSide from '../../components/AccountVerificationLeftSide'
import { Button} from '@mui/material'
import OtpInput from "react-otp-input";
import { useRouter } from 'next/router';

const EmailVerification = () => {
  const [ otp,setOtp ] = useState('')
  const router = useRouter()

  const handleOtpSubmit = (otp) => {
    setOtp(otp)
  }

  const handleClick = (e) => {
    router.push('/SignUp/PhoneVerification')
  }

  return (
    <div tw='pt-14 w-[35%]'>
        <h2 tw='pt-4 font-semibold text-xl'>Verify your email address</h2>

        <p tw='py-2 text-sm'>Enter the verification code that was sent to your email</p>

        {/* verification code TextField  */}
        <div tw='py-4'>
            
            <div tw='border-2 px-8 pb-4'>
                <OtpInput
                numInputs={ 6 }
                value = { otp }
                onChange = { handleOtpSubmit }
                inputStyle = {{ 
                    width:'100%',
                    height:'30px',
                    fontSize:'16px',
                    color:'#3E3E3E',
                    padding:'0px 10px',
                    border:'none'
                }}
                placeholder="______"
                />

            </div>

            <Button 
                variant='contained'
                fullWidth
                onClick ={ handleClick }
                tw='font-normal text-sm  bg-paysure-purple py-3 mt-12 normal-case'
                >Verify email
            </Button>
        </div>

        
    </div>
  )
}

export default EmailVerification



EmailVerification.accountVerificationLayout = function PageLayout(page){
    return(
        <div tw='flex'>
            <div tw="w-1/4">
                <AccountVerificationLeftSide verified = { false }/>
            </div>
            <div tw='w-3/4 flex justify-center py-16'>
                {page}
            </div>
        </div>
    )
}