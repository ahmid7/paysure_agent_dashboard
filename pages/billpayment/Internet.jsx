import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import Index from '../../components/PageComponents/BIllComponent/index'

const Internet = () => {
    const data = [ 'Internet', 'Pay Bills' , '/billpayment/InternetPurchase']
    return (
      <div>
          <Head>
              <title>Internet | PaySure</title>
          </Head>
  
          <Index data={ data }/>
      </div>
    )
  }
  
  export default Internet