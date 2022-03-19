import React from 'react'
import tw from 'twin.macro'
import { Button } from '@mui/material'

const RightSideBarBillPurchase = () => {
    return(
        <div tw='border-l-2 w-[20%] border-[#E4ECF7] '>
            <div tw='flex flex-col gap-y-8 '>
                <div tw='flex flex-col gap-y-2 items-center font-normal border-b-2 pt-12 pb-7'>
                    <div tw='border-2 rounded-full w-[4.5rem] h-[4.5rem] '>

                    </div>
                    <p tw='text-light-dark'>5GB for N2000 on Airtel</p>
                    <p tw='text-sm text-[#A6B7D4]'> Click to buy data now</p>
                </div>

                <div tw='flex flex-col gap-y-2 items-center font-normal border-b-2 py-5'>
                    <div tw='border-2 rounded-full w-20 h-20 '>

                    </div>
                    <p tw='text-light-dark text-center'>Have you paid your Electricity bills this month</p>
                    <p tw='text-sm text-[#A6B7D4]'>Pay now to avoid nepa wahala</p>

                    <Button
                    tw='bg-[#A6B7D4] mt-2 hover:bg-blue-500 text-white normal-case text-sm py-3 px-6 rounded-lg font-normal'
                    >Send Money</Button>
                </div>

                <div tw='flex flex-col gap-y-2 items-center font-normal border-b-2 pt-12 pb-7'>
                    <div tw='border-2 rounded-full w-20 h-20 '>

                    </div>
                    <p tw='text-light-dark'>5GB no N2000 on Airel</p>
                    <p tw='text-sm text-[#A6B7D4]'> Click to buy data now</p>
                </div>

            </div>
        </div>
    )
}

export default RightSideBarBillPurchase