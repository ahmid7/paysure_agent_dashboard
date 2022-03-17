import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import TransactionDashboard from '../components/PageComponents/TransactionDashboard'


const Transactions = () => {
  return (
    <div>
        <Head>
          <title>Transaction | PaySure</title>
        </Head>

        <TransactionDashboard/>
    </div>
  )
}

export default Transactions  