import React from 'react'
import tw from 'twin.macro'
import { MainLayout,HomeDisplayCard, DataGridViewTemp} from '../index'


const SettlementDashboard = () => {
    const homePageData = [
        {
            amount:'N1,420,243',
            title: 'Total Settlement',
        },
        {
            amount:'13,124',
            title: 'Successful',
        },
        {
            amount:'12,313',
            title: 'Failed',
        },
        {
            amount:'12,313',
            title: 'Pending',
        },
        
    ]
    
    const rows = [
      {
        id: 1,
        col1: 1,
        col2: 'N639,000.00',
        col3: 'POS withdrawal',
        col4: 'TID 00139',
        col5: 'BA9212320',
        col6: 'Paid',
        col7: 'Dec 30, 2019 05:18',
      },
      {
        id: 2,
        col1: 2,
        col2: 'N639,000.00',
        col3: 'POS withdrawal',
        col4: 'TID 00139',
        col5: 'BA9212320',
        col6: 'Paid',
        col7: 'Dec 30, 2019 05:18',
      },
      {
        id: 3,
        col1: 3,
        col2: 'N639,000.00',
        col3: 'POS withdrawal',
        col4: 'TID 00139',
        col5: 'BA9212320',
        col6: 'Paid',
        col7: 'Dec 30, 2019 05:18',
      },
      {
        id: 4,
        col1: 4,
        col2: 'N639,000.00',
        col3: 'POS withdrawal',
        col4: 'TID 00139',
        col5: 'BA9212320',
        col6: 'Paid',
        col7: 'Dec 30, 2019 05:18',
      },
      {
        id: 5,
        col1: 5,
        col2: 'N639,000.00',
        col3: 'POS withdrawal',
        col4: 'TID 00139',
        col5: 'BA9212320',
        col6: 'Paid',
        col7: 'Dec 30, 2019 05:18',
      },
    ]
  
    const columns = [
      {
        field: 'col1',
        headerName: 'S/N',
        minWidth: 50,
        flex: 0,
        headerClassName: 'grid-header',
      },
      {
        field: 'col2',
        headerName: 'Amount',
        minWidth: 140,
        flex: 1,
        headerClassName: 'grid-header',
      },
      {
        field: 'col3',
        headerName: 'Type',
        minWidth: 130,
        flex: 1,
        headerClassName: 'grid-header',
      },
      {
        field: 'col4',
        headerName: 'Identifier',
        minWidth: 126,
        flex: 1,
        headerClassName: 'grid-header',
      },
      {
        field: 'col5',
        headerName: 'RRR',
        minWidth: 101,
        flex: 1,
        headerClassName: 'grid-header',
      },
      {
        field: 'col6',
        headerName: 'Status',
        minWidth: 139,
        flex: 1,
        headerClassName: 'grid-header',
        disableClickEventBubbling: true,
        renderCell: params => {
          return (
            <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
              {params.row.col6}
            </span>
          )
        },
      },
      {
        field: 'col7',
        headerName: 'Date',
        minWidth: 144,
        flex: 1,
        headerClassName: 'grid-header',
      },
    ]

  return (
    <MainLayout title='settlement'>
       <div>
            <h2 tw='font-semibold text-xl'>Settlement Overview</h2>
            <div tw='-mt-4'>
                <HomeDisplayCard
                title = ""
                data = { homePageData }
                />
            </div>

            {/* wallet History */}
            <div>
                <DataGridViewTemp
                link='/transactions'
                limited
                title='Transaction Records'
                rows={ rows }
                columns = { columns }
                hasFilterShowing
                />
            </div>
       </div>
    </MainLayout>
  )
}

export default SettlementDashboard