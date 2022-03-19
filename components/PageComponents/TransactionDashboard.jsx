import React from 'react'
import tw from 'twin.macro'
import { MainLayout,DataGridView} from '../index'

const TransactionDashboard = () => {
  const rows = [
    {
      id: 1,
      col1: 1,
      col2: 'Pos Withdrawal',
      col3: '1011231',
      col4: 'TID-13100',
      col5: '56****5024',
      col6: '1032940',
      col7: 'N20,000',
      col8: 'N60',
      col9: 'N30',
      col10: 'Pending',
      col11:'Dec 30,2019 07:12',
      col12:'1032940'
    },
    {
      id: 2,
      col1: 2,
      col2: 'Pos Withdrawal',
      col3: '1011231',
      col4: 'TID-13100',
      col5: '56****5024',
      col6: '1032940',
      col7: 'N20,000',
      col8: 'N60',
      col9: 'N30',
      col10: 'Pending',
      col11:'Dec 30,2019 07:12',
      col12:'1032940'
    },
    {
      id: 3,
      col1: 3,
      col2: 'Pos Withdrawal',
      col3: '1011231',
      col4: 'TID-13100',
      col5: '56****5024',
      col6: '1032940',
      col7: 'N20,000',
      col8: 'N60',
      col9: 'N30',
      col10: 'Pending',
      col11:'Dec 30,2019 07:12',
      col12:'1032940'
    },
    {
      id: 4,
      col1: 4,
      col2: 'Pos Withdrawal',
      col3: '1011231',
      col4: 'TID-13100',
      col5: '56****5024',
      col6: '1032940',
      col7: 'N20,000',
      col8: 'N60',
      col9: 'N30',
      col10: 'Pending',
      col11:'Dec 30,2019 07:12',
      col12:'1032940'
    },
    {
      id: 5,
      col1: 5,
      col2: 'Pos Withdrawal',
      col3: '1011231',
      col4: 'TID-13100',
      col5: '56****5024',
      col6: '1032940',
      col7: 'N20,000',
      col8: 'N60',
      col9: 'N30',
      col10: 'Pending',
      col11:'Dec 30,2019 07:12',
      col12:'1032940'
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
      headerName: 'Transaction type',
      minWidth: 180,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col3',
      headerName: 'Ref No',
      minWidth: 100,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Terminal ID',
      minWidth: 126,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'Pan Account',
      minWidth: 160,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col6',
      headerName: 'Auth code',
      minWidth: 139,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col7',
      headerName: 'Amount',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col8',
      headerName: 'Charges',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
      
    },
    {
      field: 'col9',
      headerName: 'Settlement',
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col10',
      headerName: 'Status',
      minWidth: 100,
      flex: 1,
      sortable: false,
      headerClassName: 'grid-header',
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
            {params.row.col10}
          </span>
        )
      },
    },
    {
      field: 'col11',
      headerName: 'Date,Time',
      minWidth: 100,
      flex: 1,
      sortable: false,
      headerClassName: 'grid-header',
    },
    {
      field: 'col12',
      headerName: 'RRR',
      minWidth: 100,
      flex: 1,
      sortable: false,
      headerClassName: 'grid-header',
    },
    {
      field: 'col13',
      headerName: 'Action',
      minWidth: 100,
      flex: 1,
      sortable: false,
      headerClassName: 'grid-header',
    }
  ]

  return (
    <MainLayout title ='Transactions'>
        <section>
            <h2>Transaction</h2>
            <div>
              <DataGridView
              link='/transactions'
              title='Transaction Records'
              rows={ rows }
              columns = { columns }
              hasExportBtn
              />
            </div>
        </section>
    </MainLayout>
  )
}

export default TransactionDashboard