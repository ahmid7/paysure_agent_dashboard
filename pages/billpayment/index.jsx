import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import BillDashboard from '../../components/PageComponents/BillDashboard'

const billPayments = () => {
  return (
    <div>
      <Head>
        <title>Bill | PaySure</title>
      </Head>

      <BillDashboard/>
    </div>
  )
}

export default billPayments