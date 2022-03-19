import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'
const DataTransactionPinPage = () => {
  const data = ['Bills >> Data' ,'data','/billpayment/DataPurchase/DataTransactionSucess']
  return (
    <div>
      
      <Head>
        <title>Airtime | PaySure</title>
      </Head>

      <BillPurchasePin data={data}/>
    </div>
  )
}

export default DataTransactionPinPage