import React from 'react'
import tw from 'twin.macro'
import { MainLayout, OverviewCardTemp} from '../index'
import { Button } from '@mui/material'
import { UserIcon,UserIcon2 } from '../SVGIcons'
import AgentInfo from '../AgentInfo'
import WalletInfo from '../WalletInfo'

const ProfileDashboard = () => {
    const transactionData = [
        {
          amount:'N5,520,103',
          label: 'Total transactions',
        },
        {
          amount:'1350',
          label: 'Completed Transaction',
        },
        {
          amount:10,
          label:'Failed'
        },
        {
          amount:20,
          label: 'Pending',
        },        
    ]

    const AgentInformation = [
        'deanna.curtis@example.com',
        '733564566',
        '6391 Elgin St. Celina, Delaware 10299',
        '2019212969',
        '09012345678',
    ]
    const WalletInformation = [
        '014456574',
        'Dec 7, 2019 23:26',
        '₦639,000.00',
        'SD9212969',
        '₦8,029',
    ]
  return (
    <MainLayout title ='profile'>
        <section>

            {/* complete kyc section */}
            <div tw='-mt-9 px-10 py-6 rounded-md bg-Kyc-bg bg-center bg-cover  text-white'>
                <header tw='font-normal text-xl pb-2'>Complete your kyc</header>
                <div tw='flex text-sm justify-between'>
                    <p>To enjoy all paysure services please complete your profile by filling the important documents</p>
                    <button>Got to profile</button>
                </div>
            </div>

            <div tw='flex justify-between items-center py-5'>
                <div tw='flex gap-x-4'>
                    <UserIcon/>
                    <div tw=''>
                        <h3 tw='font-semibold text-xl pt-1'> Bolarinwa Bimbola </h3>
                        <p tw='font-normal text-sm pt-1'>3 Terminals</p>
                    </div>
                </div>
                
                <div>
                    <Button
                    variant='contained'
                    startIcon = {<UserIcon2/>}
                    tw='py-2 text-sm rounded-lg normal-case bg-[#E9FBF9] text-paysure-success-100'
                    >
                        Edit Profile
                    </Button>
                </div>
            </div>


            <div tw='py-6   px-8 rounded-md bg-balance-bg bg-center bg-cover '>
                <p tw='font-semibold text-sm pb-2'>Total wallet balance</p>
                <p tw='font-semibold text-3xl'>N350,034 </p>
            </div>
            
            <div tw='mt-2'>
                <OverviewCardTemp
                title = 'Transactions'
                btnLabel = 'See all activities'
                data = { transactionData }
                link = '/transactions'
                />
            </div>

            <div tw='mt-6 grid grid-cols-2 gap-7'>
                <AgentInfo data = {AgentInformation}/>
                <WalletInfo data = { WalletInformation }/>
            </div>

        </section>
    </MainLayout>
  )
}

export default ProfileDashboard