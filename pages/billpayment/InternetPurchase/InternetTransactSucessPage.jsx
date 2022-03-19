import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchaseSucess from '../../../components/PageComponents/BIllComponent/BillPurchaseSucess'

const InternetTransactSucessPage = () => {
  const data = ['Bills >> Internet', 'Internet','Internet']
  return (
    <div>
      
      <Head>
        <title>Tax | PaySure</title>
      </Head>

      <BillPurchaseSucess  data={data}/>

    </div>
  )
}

export default InternetTransactSucessPage