import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'

const TransferTransactPinPage = () => {
  const data = ['Bills >> Transfer' ,'Transfer','/billpayment/TransferTransaction/TransferTransactSucess']
  return (
    <div>
      
      <Head>
        <title>Transfer | PaySure</title>
      </Head>

      <BillPurchasePin data={data}/>
    </div>
  )
}

export default TransferTransactPinPage