import React from 'react'
import { MainLayout } from '../../index'
import SideBarBillPurchase from './LeftSideBarBillPurchase'
import RightSideBarBillPurchase from './RightSideBarBillPurchase'
import tw from 'twin.macro'
import TransactionSucess from './TransactionSucess'

const BillPurchaseSucess = ( {data} ) => {
  const [ title, value, billType] = data
  return (
    <MainLayout title={title}>
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'>
          <div tw='flex'>
            <SideBarBillPurchase value = {value}/>
            <TransactionSucess billType={billType}/>
            <RightSideBarBillPurchase/>
          </div>
        </section>
    </MainLayout>
  )
}

export default BillPurchaseSucess