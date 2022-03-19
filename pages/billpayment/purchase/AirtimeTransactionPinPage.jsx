import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'

const AirtimeTransactionPin = () => {
  const data = ['Bills >> Data' ,'data','/billpayment/purchase/AirtimeTransferSucessPage']
  return (
    <div>
      
      <Head>
        <title>Airtime | PaySure</title>
      </Head>

      <BillPurchasePin data= {data}/>
    </div>
  )
}

export default AirtimeTransactionPin