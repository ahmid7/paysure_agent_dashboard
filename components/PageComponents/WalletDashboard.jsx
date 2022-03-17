import React from 'react'
import tw from 'twin.macro'
import { MainLayout,DataGridViewTemp } from '../index'
import Link from 'next/Link'
import { Button } from '@mui/material'

const WalletDashboard = () => {
  const walletBalance = '350,000'
  
  const columns = [
    {
      field:'S/N',
    },
    {
      field:'Transaction type'
    },
    {
      field:'Debit'
    },
    {
      field:'Terminal ID'
    },
    {
      field:'Credit'
    },
    {
      field:'Balance after'
    },
    {
      field:'Date'
    },
    {
      field:'Action'
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
    {
      id:'1',
      col5:'done'
    },
  ]
  return (
    <MainLayout title = 'Wallet'>
        <section tw="-mt-2">
            <h2 tw='font-semibold text-2xl pb-5'>Wallet</h2>
            
            {/* wallet */}
            
            <div tw='py-6  px-8 rounded-md bg-balance-bg bg-center bg-cover '>
                <p tw='font-semibold text-sm pb-2'>Total wallet balance</p>
                <div tw='items-center flex justify-between'>

                    {/* wallet */}
                    <div>
                        
                        {/* from database */}
                        <p tw='font-semibold text-3xl'>{`N${ walletBalance }`}</p>
                    </div>

                    <div tw='flex '>
                        <Button
                        variant ='contained'
                        tw='py-3 text-sm rounded-lg px-12 normal-case mr-4 bg-paysure-primary-100'
                        >
                            Fund Wallet
                        </Button>
                        <Button
                        variant = 'contained'
                        tw='py-3 text-sm rounded-lg px-12 normal-case ml-4 bg-dark '
                        >
                            Withdraw
                        </Button>
                    </div>
                </div>

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
        </section>
    </MainLayout>
  )
}


export default WalletDashboard