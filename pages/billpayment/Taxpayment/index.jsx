import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import TaxTransact from '../../../components/PageComponents/BIllComponent/Tax/TaxTransact'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Tax | PaySure</title>
      </Head>

      <TaxTransact/>
    </div>
  )
}

export default Index