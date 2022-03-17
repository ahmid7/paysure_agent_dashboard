import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import WalletDashboard from '../components/PageComponents/WalletDashboard'

const wallet = () => {
  return (
    <div>
      <Head>
        <title>Home | PaySure</title>
      </Head>

      <WalletDashboard/>
    </div>
  )
}

export default wallet