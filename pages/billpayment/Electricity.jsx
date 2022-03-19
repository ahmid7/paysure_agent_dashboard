import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import Index from '../../components/PageComponents/BIllComponent/index'

const Electricity = () => {
    const data = [ 'Electricity', 'Pay Bills' , '/billpayment/ElectricityPurchase']
    return (
      <div>
          <Head>
              <title>Electricity | PaySure</title>
          </Head>
  
          <Index data={ data }/>
      </div>
    )
  }
  
  export default Electricity