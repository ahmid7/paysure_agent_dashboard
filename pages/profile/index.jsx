import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import ProfileDashboard from '../../components/PageComponents/ProfileDashboard'

const Index = () => {
  return (
    <div>
        <Head>
          <title>Profile | PaySure</title>
        </Head>

        <ProfileDashboard/>
    </div>
  )
}

export default Index