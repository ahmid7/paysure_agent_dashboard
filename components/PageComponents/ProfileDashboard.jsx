import React from 'react'
import tw from 'twin.macro'
import { MainLayout, OverviewCardTemp} from '../index'
import { Button } from '@mui/material'
import { UserIcon,UserIcon2 } from '../SVGIcons'
import AgentInfo from '../AgentInfo'
import WalletInfo from '../WalletInfo'
import DataGridViewTemp from '../DataGridViewTemp'
import DataGridView from '../DataGridView'

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

    const rows = [
        {
          id: 1,
          col1: 1,
          col2: 'TID- 212969',
          col3: 'SD9212969',
          col4: 'Union Bank',
          col5: '70',
          col6: 'N  8,029,182',
          col7: 'ACTIVE',
          col8: 'Dec 30,2019',
        },
        {
          id: 2,
          col1: 2,
          col2: 'TID- 212969',
          col3: 'SD9212969',
          col4: 'Union Bank',
          col5: '70',
          col6: 'N  8,029,182',
          col7: 'ACTIVE',
          col8: 'Dec 30,2019',
        },
      ]
    
      const columns = [
        {
          field: 'col1',
          headerName: 'S/N',
          minWidth: 60,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col2',
          headerName: 'Terminal ID',
          minWidth: 120,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col3',
          headerName: 'Serial No',
          minWidth: 140,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col4',
          headerName: 'Bank',
          minWidth: 120,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col5',
          headerName: 'No of Transactions',
          minWidth: 150,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col6',
          headerName: 'Transactions(N)',
          minWidth: 150,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col7',
          headerName: 'Status',
          minWidth: 120,
          flex: 1,
          headerClassName: 'grid-header',
          renderCell: params => {
            return (
              <span css={[tw`bg-border2 text-paysure-success-100 p-1 rounded`]}>
                {params.row.col7}
              </span>
            )
          },
        },
        {
          field: 'col8',
          headerName: 'Date Added',
          minWidth: 140,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
            field: 'col9',
            headerName: 'Actions',
            minWidth: 101,
            flex: 1,
            headerClassName: 'grid-header',
        },
      ]


      const settlementColumns = [
        {
          field: 'col1',
          headerName: 'S/N',
          minWidth: 55,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col2',
          headerName: 'Terminal ID',
          minWidth: 100,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col3',
          headerName: 'Transaction ID',
          minWidth: 100,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col4',
          headerName: 'Amount',
          minWidth: 150,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col5',
          headerName: 'Status',
          minWidth: 150,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col6',
          headerName: 'Date Added',
          minWidth: 150,
          flex: 1,
          headerClassName: 'grid-header',
        },
        {
          field: 'col7',
          headerName: 'Actions',
          minWidth: 160,
          flex: 1,
          headerClassName: 'grid-header',
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

            <div tw='mt-12'>
                <p>Terminals</p>
                <DataGridView
                rows={ rows }
                columns = { columns }
                hasFilterShowing
                /> 
            </div>

            <div tw='mt-12'>
                <p>Settlements</p>
                <DataGridView
                columns = { settlementColumns }
                hasFilterShowing
                /> 
            </div>

        </section>
    </MainLayout>
  )
}

export default ProfileDashboard