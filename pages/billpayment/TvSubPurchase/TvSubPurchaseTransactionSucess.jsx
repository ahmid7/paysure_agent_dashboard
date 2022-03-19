import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchaseSucess from '../../../components/PageComponents/BIllComponent/BillPurchaseSucess'

const TvSubPurchaseTransactionSucess = () => {
  const data = ['Bills >> TvSubscription', 'TV subscription','TvSub',]
  return (
    <div>
      
      <Head>
        <title>TvSubscription | PaySure</title>
      </Head>

      <BillPurchaseSucess  data={data}/>

    </div>
  )
}

export default TvSubPurchaseTransactionSucess