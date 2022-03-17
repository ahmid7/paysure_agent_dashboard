import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import { CheckBox,CheckBoxSucess } from './SvgIcons'

const AccountVerificationLeftSide = (props) => {
  return (
    <div tw='h-full w-1/4 bg-[#FAFAFA] fixed px-8 py-7'>
        <div>
            <Image src='/Images/Paysure__.png' width='90' height='25' alt='paysure-image-logo'/>
        </div>

        <div tw='mt-14'>
            <h2 tw='py-4 font-semibold text-lg'>Account Verification</h2>

            <p tw='pb-5 font-normal text-sm leading-relaxed'>To complete this stage of your sign up you need to verify </p>

            <div tw='flex items-center gap-x-4'>
                {
                    !props.verified && 
                    <CheckBox/>
                }
                {
                    props.verified &&
                    <CheckBoxSucess/>
                }
                <p tw='font-normal text-sm'>Email address</p>
            </div>

            <div tw='pt-8 flex items-center gap-x-4'>
                {
                    !props.verified && 
                    <CheckBox/>
                }
                {
                    props.verified &&
                    <CheckBoxSucess/>
                }
                <p tw='font-normal text-sm'>Phone number</p>
            </div>
        </div>
    </div>
  )
}

export default AccountVerificationLeftSide