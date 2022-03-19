import React from 'react'
import tw from 'twin.macro'
import { MainLayout, HomeDisplayCard,DataGridViewTemp} from '../../index'
import { Button } from '@mui/material'
import { BuyIcon } from '../../SVGIcons'
import { useRouter } from 'next/router'

const Index = ({data }) => {
   const [ title , buttonText, link] = data
   const router = useRouter()
   const handleButton = () => {
      router.push(`${link}`)
   }


    const columns = [
        {
          field:'S/N',
        },
        {
          field:'Transaction type'
        },
        {
          field:'Phone number'
        },
        {
          field:'Amount'
        },
        {
          field:'Network provider'
        },
        {
          field:'Status'
        },
        {
          field:'Amount'
        },
        {
          field:'Charge'
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
        {
          id:'1',
          col6:'done'
        },
        {
          id:'1',
          col7:'done'
        },
      ]
    const BillData = [
        {
            amount:'N420,000',
            title:'Total Transaction'
        },
        {
          amount:'1024',
          title: 'Complete transactions',
        },
        {
          amount:'12',
          title: 'Failed transaction',
        },
        {
          amount:'3',
          title:'Failed Transaction'
        }
      ]
  return (
    <MainLayout goBack> 
        <section>
            <div tw='flex items-center justify-between'>
                <h2 tw='font-semibold text-2xl'>{ title }</h2>
                <Button
                startIcon = {<BuyIcon/>}
                tw='py-3 px-4 font-normal text-sm rounded-lg normal-case bg-paysure-primary-100 text-white hover:bg-blue-400'
                onClick = { handleButton }
                >
                  {buttonText}
                </Button>
            </div>

            <div tw='-mt-2'>
                <HomeDisplayCard
                title = ''
                data = {BillData}
                />
            </div>

            <div>
                <DataGridViewTemp
                link='/'
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

export default Index