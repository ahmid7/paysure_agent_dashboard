import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchaseSucess from '../../../components/PageComponents/BIllComponent/BillPurchaseSucess'

const TaxTransactSuccessPage = () => {
  const data = ['Bills >> Tax', 'Tax','Tax']
  return (
    <div>
      
      <Head>
        <title>Tax | PaySure</title>
      </Head>

      <BillPurchaseSucess  data={data}/>

    </div>
  )
}

export default TaxTransactSuccessPage