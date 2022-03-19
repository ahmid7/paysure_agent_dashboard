import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchasePin from '../../../components/PageComponents/BIllComponent/BillPurchasePin'

const TvSubTransactionPinPage = () => {
  const data = ['Bills >> TvSubcription' ,'TvSubscription','/billpayment/TvSubPurchase/TvSubPurchaseTransactionSucess']
  return (
    <div>
      
      <Head>
        <title>TvSub | PaySure</title>
      </Head>

      <BillPurchasePin data={data}/>
    </div>
  )
}

export default TvSubTransactionPinPage