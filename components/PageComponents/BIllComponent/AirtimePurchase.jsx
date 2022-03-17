
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../index'
import { Arrow,CheckBox,CheckBoxSucess } from '../../SvgIcons'

const AirtimePurchase = () => {
  return (
    <MainLayout title= "Bills >> Airtime">
        <section>
            <div tw='grid grid-cols-3 -mt-4'>
                <div>

                    <div tw='flex gap-x-2 items-center'>
                        <Arrow/>
                        Back
                    </div>

                    <h2 tw='pt-4 font-normal text-lg text-light-dark pb-12'>Buy airtime</h2>
                    
                    <div tw='flex flex-col gap-y-4 text-sm font-normal'>
                        <div tw='flex items-center gap-x-4'>
                            <CheckBoxSucess/>
                            Enter Information
                        </div>

                        <div tw='flex items-center gap-x-4'> 
                            <CheckBox/>
                            Confirm Transaction
                        </div>
                    </div>

                </div>

                <div>
                    
                </div>

                <div tw='flex flex-col gap-y-8'>
                    <div tw='flex flex-col gap-y-2 items-center font-normal'>
                        <div tw='border-2 rounded-full w-[4.5rem] h-[4.5rem] '>

                        </div>
                        <p tw='text-light-dark'>5GB for N2000 on Airtel</p>
                        <p tw='text-sm text-[#A6B7D4]'> Click to buy data now</p>
                    </div>

                    <div tw='flex flex-col gap-y-2 items-center font-normal'>
                        <div tw='border-2 rounded-full w-20 h-20 '>

                        </div>
                        <p tw='text-light-dark'>5GB for N2000 on Airtel</p>
                        <p tw='text-sm text-[#A6B7D4]'> Click to buy data now</p>
                    </div>

                    <div tw='flex flex-col gap-y-2 items-center font-normal'>
                        <div tw='border-2 rounded-full w-20 h-20 '>

                        </div>
                        <p tw='text-light-dark'>5GB for N2000 on Airtel</p>
                        <p tw='text-sm text-[#A6B7D4]'> Click to buy data now</p>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>

                </div>
            </div>
        </section>
    </MainLayout>
  )
}

export default AirtimePurchase
