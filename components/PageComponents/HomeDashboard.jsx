import React from 'react'
import tw from 'twin.macro'
import { MainLayout,HomeDisplayCard,OverviewCardTemp, DataGridViewTemp  } from '../index'
import { useRouter } from 'next/router'


const HomeDashboard = () => {
  const router = useRouter()

  const handleKycButton = () => {
    router.push('/')
  }

  // const columns = [
  //   {
  //     field:'S/N',
  //   },
  //   {
  //     field:'Transaction type'
  //   },
  //   {
  //     field:'Ref.No'
  //   },
  //   {
  //     field:'Terminal ID'
  //   },
  //   {
  //     field:'Pan Account'
  //   },
  //   {
  //     field:'Auth Code'
  //   },
  //   {
  //     field:'Amount'
  //   },
  //   {
  //     field:'Charges'
  //   },
  //   {
  //     field:'Settlement'
  //   },
  //   {
  //     field:'Status'
  //   },
  //   {
  //     field:'Date,Time'
  //   }
  // ]

  // const rows = [
  //   {
  //     id:'1',
  //     col1:'done'
  //   },
  //   {
  //     id:'1',
  //     col2:'done'
  //   },
  //   {
  //     id:'1',
  //     col3:'done'
  //   },
  //   {
  //     id:'1',
  //     col4:'done'
  //   },
  //   {
  //     id:'1',
  //     col5:'done'
  //   },
  //   {
  //     id:'1',
  //     col6:'done'
  //   },
  //   {
  //     id:'1',
  //     col7:'done'
  //   },
  //   {
  //     id:'1',
  //     col8:'done'
  //   }

  // ]
  const rows = [
    {
      id: 1,
      col1: 1,
      col2: 'Bessie Cooper',
      col3: 'Tv Subscription',
      col4: 5000,
      col5: 39.9,
      col6: '443943043',
      col7: 'Bank Card',
      col8: 'pending',
      col9: 'Dec 30, 2018 05:12',
      col10: '',
    },
    {
      id: 2,
      col1: 2,
      col2: 'Bessie Cooper',
      col3: 'Tv Subscription',
      col4: 5000,
      col5: 39.9,
      col6: '443943043',
      col7: 'Bank Card',
      col8: 'pending',
      col9: 'Dec 30, 2018 05:12',
      col10: '',
    },
    {
      id: 3,
      col1: 3,
      col2: 'Bessie Cooper',
      col3: 'Tv Subscription',
      col4: 5000,
      col5: 39.9,
      col6: '443943043',
      col7: 'Bank Card',
      col8: 'pending',
      col9: 'Dec 30, 2018 05:12',
      col10: '',
    },
    {
      id: 4,
      col1: 4,
      col2: 'Bessie Cooper',
      col3: 'Tv Subscription',
      col4: 5000,
      col5: 39.9,
      col6: '443943043',
      col7: 'Bank Card',
      col8: 'completed',
      col9: 'Dec 30, 2018 05:12',
      col10: '',
    },
    {
      id: 5,
      col1: 5,
      col2: 'Bessie Cooper',
      col3: 'Tv Subscription',
      col4: 5000,
      col5: 39.9,
      col6: '443943043',
      col7: 'Bank Card',
      col8: 'pending',
      col9: 'Dec 30, 2018 05:12',
      col10: '',
    },
  ]

  const columns = [
    {
      field: 'col1',
      headerName: 'S/N',
      minWidth: 71,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col2',
      headerName: 'Initiator',
      minWidth: 227,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col3',
      headerName: 'Type',
      minWidth: 140,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Amount',
      minWidth: 126,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'Charge',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col6',
      headerName: 'Transaction Ref.',
      minWidth: 139,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col7',
      headerName: 'Payment Method',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col8',
      headerName: 'Status',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
            {params.row.col8}
          </span>
        )
      },
    },
    {
      field: 'col9',
      headerName: 'Notification Time',
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col10',
      headerName: 'Action',
      minWidth: 100,
      flex: 1,
      sortable: false,
      headerClassName: 'grid-header',
    }
  ]

  const homePageData = [
      {
        amount:0,
        title: 'Wallet balance',
      },
      {
        amount:2,
        title: 'Terminals',
      },
      {
        amount:0,
        title: 'Transactions',
      },
      
  ]

  const transactionData = [
    {
      amount:0,
      label: 'Completed transactions',
    },
    {
      amount:0,
      label: 'Failed',
    },
    {
      amount:0,
      label: 'Pending',
    },
    {
      amount:0,
      label:'total Transaction'
    },
    {
      amount:0,
      label:'total'
    }
  ]
  return (
    <MainLayout title ='Home'>
      <section>
          {/* complete kyc section */}
          <div tw='-mt-9 px-10 py-4 rounded-md bg-Kyc-bg bg-center bg-cover  text-white'>
              <header tw='font-semibold text-2xl pb-2'>Complete your kyc</header>
              <div tw='flex text-sm justify-between'>
                <p>To enjoy all paysure services please complete your profile by filling the important documents</p>
                <button>Got to profile</button>
              </div>
          </div>

          {/* overview section */}

          <HomeDisplayCard 
          title = "Overview"
          data = { homePageData }
          />

          {/* Transaction section */}

         <div tw='mt-12'>

          <OverviewCardTemp
          title = 'Transactions'
          btnLabel = 'View All'
          data = { transactionData }
          link = '/transactions'
          />

          <DataGridViewTemp
          link='/transactions'
          limited
          title='Transaction Records'
          rows={ rows }
          columns = { columns }
          hasFilterShowing
          />
         </div>


      </section>
    </MainLayout>
  )
}

export default HomeDashboard