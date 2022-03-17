import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import AirtimePurchase from '../../../components/PageComponents/BIllComponent/AirtimePurchase'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Airtime | PaySure</title>
      </Head>

      <AirtimePurchase/>
    </div>
  )
}

export default Index