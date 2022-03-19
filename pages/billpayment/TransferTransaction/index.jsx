import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import TransferTransact from '../../../components/PageComponents/BIllComponent/Transfer/TransferTransact'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Electricity | PaySure</title>
      </Head>

      <TransferTransact/>
    </div>
  )
}

export default Index