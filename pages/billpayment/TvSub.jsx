import React from 'react'
import tw from 'twin.macro'
import Head from 'next/Head'
import Index from '../../components/PageComponents/BIllComponent/index'

const TvSub = () => {
  const data = [ 'TV subscription', 'Buy Sub' ]
  return (
    <div>
        <Head>
            <title>TV Sub | PaySure</title>
        </Head>

        <Index data={ data }/>
    </div>
  )
}

export default TvSub