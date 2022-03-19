import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchaseSucess from '../../../components/PageComponents/BIllComponent/BillPurchaseSucess'

const TransferTransactSucess = () => {
  const data = ['Bills >> Transfer', 'Transfer','Transfer']
  return (
    <div>
      
      <Head>
        <title>Transfer | PaySure</title>
      </Head>

      <BillPurchaseSucess  data={data}/>

    </div>
  )
}

export default TransferTransactSucess