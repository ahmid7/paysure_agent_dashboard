import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import SettlementDashboard from '../components/PageComponents/SettlementDashboard'

const IndexPage = () => (
  <div>
    <Head>
      <title>Settlement | PaySure</title>
    </Head>

    <SettlementDashboard/>
  </div>
)

export default IndexPage
