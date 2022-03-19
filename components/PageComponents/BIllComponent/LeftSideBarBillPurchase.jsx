import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import { Arrow,CheckBox,CheckBoxSucess } from '../../SvgIcons'
import Router from 'next/router'

const SideBarBillPurchase = ({value}) => {

  const handleGoBack = () => {
    Router.back()
  }
  return (
    <div tw='border-r-2 border-[#E4ECF7]  w-[30%] pt-8'>
      <div>

        <div tw='flex gap-x-2 items-center' onClick={handleGoBack}>
            <Arrow/>
            Back
        </div>


        <h2 tw='pt-4 font-normal text-xl font-semibold text-light-dark pb-10 text-light-dark'>{value}</h2>

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
    </div>
  )
}

export default SideBarBillPurchase 