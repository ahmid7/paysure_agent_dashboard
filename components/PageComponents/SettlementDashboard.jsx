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
    const columns = [
        {
          field:'S/N',
        },
        {
          field:'Amount'
        },
        {
          field:'Type'
        },
        {
          field:'Identifier'
        },
        {
          field:'RRR'
        },
        {
          field:'Status'
        },
        {
          field:'Date'
        },
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