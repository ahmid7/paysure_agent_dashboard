import React from 'react'
import tw from 'twin.macro'
import { MainLayout,DataGridView} from '../index'

const TransactionDashboard = () => {
  const columns = [
    {
      field:'S/N',
    },
    {
      field:'Transaction type'
    },
    {
      field:'Ref.No'
    },
    {
      field:'Terminal ID'
    },
    {
      field:'Pan Account'
    },
    {
      field:'Auth Code'
    },
    {
      field:'Amount'
    },
    {
      field:'Charges'
    },
    {
      field:'Settlement'
    },
    {
      field:'Status'
    },
    {
      field:'Date,Time'
    }
  ]

  const rows = [
    {
      id:'1',
      col1:'done'
    },
    {
      id:'1',
      col2:'done'
    },
    {
      id:'1',
      col3:'done'
    },
    {
      id:'1',
      col4:'done'
    },
    {
      id:'1',
      col5:'done'
    },
    {
      id:'1',
      col6:'done'
    },
    {
      id:'1',
      col7:'done'
    },
    {
      id:'1',
      col8:'done'
    }

  ]


  return (
    <MainLayout title ='Transactions'>
        <section>
            <h2>Transaction</h2>
            <div>
              <DataGridView
              link='/transactions'
              limited
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