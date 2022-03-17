import React from 'react'
import tw from 'twin.macro'
import SignIn from '../components/SignIn'
import SignInLogoSide from '../components/SignInLogoSide'
// This should be the login page
// remeber to change it to login instead of ndex
const IndexPage = () => {
    
    return(
        <div tw='flex w-screen h-screen'>
            <div tw='w-1/4'>
                <SignInLogoSide />
            </div>
            <div tw='w-3/4 flex justify-center pt-20'>
                <SignIn/>
            </div>
            
        </div>
    )
}

export default IndexPage
