import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import Internet from '../../../components/PageComponents/BIllComponent/Internet/internetTransact'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Internet | PaySure</title>
      </Head>


      <Internet/>
    </div>
  )
}

export default Index