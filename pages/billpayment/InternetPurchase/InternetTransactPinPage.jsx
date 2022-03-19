import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'

const InternetTransactPinPage = () => {
  const data = ['Bills >> Internet' ,'Internet','/billpayment/InternetPurchase/InternetTransactSucessPage']
  return (
    <div>
      
      <Head>
        <title>Internet | PaySure</title>
      </Head>

      <BillPurchasePin data= {data}/>
    </div>
  )
}

export default InternetTransactPinPage