import React from 'react'
import tw from 'twin.macro'
import { MainLayout,HomeDisplayCard} from '../index'
import { Airtime,Data, TvSubscription,Electricity,Transfer,Tax,Internet } from '../SVGIcons'
import { useRouter } from 'next/router'

const BillDashboard = () => {
  const router = useRouter()
  return (
    <MainLayout title="Bills">
        <section tw='-mt-8'>
            <h2 tw='font-semibold text-lg'>Bills</h2>

            <div tw='grid grid-cols-5 gap-4 mt-4'>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4 ' onClick = { () => {router.push('/billpayment/Airtime')}}>
                    <Airtime/>

                    <p tw='font-semibold text-sm pt-4'>Airtime</p>
                </div>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4' onClick = { () => {router.push('/billpayment/Data')}}>
                    <Data/>

                    <p tw='font-semibold text-sm pt-4'>Data</p>
                </div>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4' onClick = { () => {router.push('/billpayment/TvSub')}}>
                    <TvSubscription/>

                    <p tw='font-semibold text-sm pt-4'>TV Subscription</p>
                </div>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4' onClick = { () => {router.push('/billpayment/Electricity')}}>
                    <Electricity/>

                    <p tw='font-semibold text-sm pt-4'>Electricity</p>
                </div>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4' onClick = { () => {router.push('/billpayment/Transfer')}}>
                    <Transfer/>

                    <p tw='font-semibold text-sm pt-4'>Transfer</p>
                </div>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4' onClick = { () => {router.push('/billpayment/Tax')}}>
                    <Tax/>

                    <p tw='font-semibold text-sm pt-4'>Tax</p>
                </div>

                <div tw='px-6 border-2 rounded-xl pt-9 pb-4' onClick = { () => {router.push('/billpayment/Internet')}}>
                    <Internet/>

                    <p tw='font-semibold text-sm pt-4'>Internet</p>
                </div>
            </div>


        </section>
    </MainLayout>
  )
}

export default BillDashboard