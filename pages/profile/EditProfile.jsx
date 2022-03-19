import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import EditProfileDasboard from '../../components/PageComponents/EditProfileDasboard'

const EditProfile = () => {
  return (
        <div>
            <Head>
            <title>Profile | PaySure</title>
            </Head>

            <EditProfileDasboard/>
        </div>
  )
}

export default EditProfile