import React,{ useState} from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../..'
import SideBarBillPurchase from './LeftSideBarBillPurchase'
import RightSideBarBillPurchase from './RightSideBarBillPurchase'
import TransactionPin from './TransactionPin';

const BillPurchasePin = ({data}) => {
  const [title, value,link] = data
  return ( 
    <MainLayout title={`${title}`}>
        <section tw='border-[#E4ECF7] -mt-8 border-t-2'> 
           <div tw='flex '>
               <SideBarBillPurchase value= {value}/>
                <TransactionPin link={link}/>
               <RightSideBarBillPurchase/>
           </div>
       </section>
    </MainLayout>
  )
}

export default BillPurchasePin
