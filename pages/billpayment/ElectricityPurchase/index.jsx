import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import ElectricityPurchase from '../../../components/PageComponents/BIllComponent/Electricity/ElectricityPurchase'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Electricty | PaySure</title>
      </Head>

      <ElectricityPurchase/>
    </div>
  )
}

export default Index