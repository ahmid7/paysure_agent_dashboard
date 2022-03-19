import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'

const ElectricityTransactPinPage = () => {
  const data = ['Bills >> ELectricity' ,'Electricity','/billpayment/ElectricityPurchase/ElectricityTransactSucess']
  return (
    <div>
      
      <Head>
        <title>TvSub | PaySure</title>
      </Head>

      <BillPurchasePin data={data}/>
    </div>
  )
}

export default ElectricityTransactPinPage