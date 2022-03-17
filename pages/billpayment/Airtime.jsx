import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import Index from '../../components/PageComponents/BIllComponent/index'

const Airtime = () => {
  const data = [ 'Airtime', 'Buy Airtime' ]
  return (
    <div>
        <Head>
            <title>Airtime | PaySure</title>
        </Head>

        <Index data={ data }/>
    </div>
  )
}

export default Airtime