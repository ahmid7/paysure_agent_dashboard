import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'

const TaxTransactPinPage = () => {
  const data = ['Bills >> Tax' ,'Tax','/billpayment/Taxpayment/TaxTransactSucessPage']
  return (
    <div>
      
      <Head>
        <title>Transfer | PaySure</title>
      </Head>

      <BillPurchasePin data={data}/>
    </div>
  )
}

export default TaxTransactPinPage