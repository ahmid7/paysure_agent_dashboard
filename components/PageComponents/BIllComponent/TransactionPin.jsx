import React,{ useState} from 'react'
import {useRouter} from 'next/router'
import OtpInput from "react-otp-input";
import { Button} from '@mui/material'
import tw from 'twin.macro'
const TransactionPin = (props) => {
    const link = props.link
    const router = useRouter()
    const [ pin,setPin ] = useState('')
  
    const handlePinSubmit = (otp) => {
      setPin(otp)
    }

    const handleButton = () => {
        router.push(`${link}`)
    }
  return (
    <form tw=' w-[50%] py-5 font-normal'>
        <div tw='w-[60%] mx-auto'>
            <div tw='flex flex-col '>
                <label tw='text-center pb-12'>Enter your transaction Pin</label>

                <div tw=''>
                    <OtpInput
                    numInputs={ 4 }
                    value = { pin }
                    onChange = { handlePinSubmit }
                    inputStyle = {{ 
                        width:'75%',
                        height:'50px',
                        fontSize:'16px',
                        color:'#3E3E3E',
                        borderRadius:'5px',
                        border:'1px solid #E3E5E8'
                    }}
                    placeholder="****"
                    />

                </div>
            </div>

            <Button fullWidth
            tw='bg-paysure-primary-100 rounded-lg    mt-10 hover:bg-blue-500 text-white normal-case text-sm py-4'
            onClick = { handleButton }
            >
                Confirm
            </Button>
                    {/* thid should come from backend */}
            <div tw='mt-10 py-3 rounded-md bg-[#E9F4FB] px-4 text-sm '>
                <p>Wallet balance</p>
                <p tw='font-normal text-lg pt-2 '>N400,000</p>
            </div>
        </div>
    </form>
  )
}

export default TransactionPin