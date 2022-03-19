import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import TvSubpurchase from '../../../components/PageComponents/BIllComponent/TvSubscription/TvSubpurchase'

const Index = () => {
  return (
    <div>
      <Head>
        <title>TvSub | PaySure</title>
      </Head>

      <TvSubpurchase/>
    </div>
  )
}

export default Index