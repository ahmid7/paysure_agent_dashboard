import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import Index from '../../components/PageComponents/BIllComponent/index'

const Tax = () => {
    const data = [ 'Tax', 'Pay Tax' , '/billpayment/Taxpayment']
    return (
      <div>
          <Head>
              <title>Tax | PaySure</title>
          </Head>
  
          <Index data={ data }/>
      </div>
    )
}
  
export default Tax