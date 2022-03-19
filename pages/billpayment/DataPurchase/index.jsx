import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import DataPurchase from '../../../components/PageComponents/BIllComponent/data/DataPurchase'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Data | PaySure</title>
      </Head>

      <DataPurchase/>
    </div>
  )
}

export default Index