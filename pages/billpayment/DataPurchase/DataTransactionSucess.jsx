import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillPurchaseSucess from '../../../components/PageComponents/BIllComponent/BillPurchaseSucess'

const DataTransactionSucessPage = () => {
  const data = ['Bills >> Data', 'Data','Data',]
  return (
    <div>
      
      <Head>
        <title>Data | PaySure</title>
      </Head>

      <BillPurchaseSucess  data={data}/>

    </div>
  )
}

export default DataTransactionSucessPage