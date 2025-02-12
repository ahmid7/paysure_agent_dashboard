import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import HomeDashboard from '../components/PageComponents/HomeDashboard'

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | PaySure</title>
    </Head>

    <HomeDashboard/>
  </div>
)

export default IndexPage
