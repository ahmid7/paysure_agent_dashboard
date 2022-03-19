import { Button } from '@mui/material'
import React from 'react'
import tw from 'twin.macro'
import { SuccessTransaction } from '../../SVGIcons'

const TransactionSucess = (props) => {
  console.log(props.billType)
  let value = []
  
  if(props.billType=== 'Airtime' ){
    value = ['Amount','Reference','Transaction type', 'Charges','Recurring']
  }else if(props.billType === 'Transfer'){
    value = ['Amount','Reference','Receipient', 'Receipient Bank','Charges']
  }else if(props.billType ==='Data'){
    value = ['Amount','Reference','Receipient', 'Receipient Bank','Charges']
  }else if(props.billType === 'TvSub'){
    value = ['Amount','Reference','Provider', 'Plan','charges']
  }else if(props.billType === 'Electricity'){
    value =[ 'Amount','Reference','Electricity board','Meter Number','Total Amount' ]
  }else if(props.billType === 'Internet'){
    value =[ 'Amount','Reference','Provider','Phone Number','Charges' ]
  }else if(props.billType === 'Tax'){
    value =[ 'Tax','Reference','Revenue head','Phone Number','Charges' ]
  }
    
  return (
    <div tw='w-1/2 py-5 font-normal'>
        <div tw='w-[60%] mx-auto  '>

          <div tw='flex justify-center'>
            <SuccessTransaction/>
          </div>

          <h2 tw='font-normal py-2 text-center '>Transaction Successfull</h2>
          <p tw='text-sm text-center '>We believe you enjoyed the experience</p>

          {/* change this to map */}
          <div tw='border-t-2 border-b-2 mt-5 pt-6 flex flex-col gap-y-3 '>
            <div tw='flex justify-between'>
              <div>
                <p tw='text-xs'>{value[0]}</p>
                {/* This from backend */}
                <p tw='py-2 text-paysure-text-100'>5,000</p>

              </div>
              
              <div>
                <p tw='text-xs'>{value[1]}</p>
                {/* This from backend */}
                <p tw='text-right py-2 text-paysure-text-100'>5,000</p>

              </div>
            </div>

            <div tw='flex justify-between '>
              <div>
                <p tw='text-xs'>{value[2]}</p>
                {/* This from backend */}
                <p tw='py-2 text-paysure-text-100'>5,000</p>

              </div>
              
              <div>
                <p tw='text-xs'>{value[3]}</p>
                {/* This from backend */}
                <p tw='text-right py-2 text-paysure-text-100'>5,000</p>

              </div>
            </div>

            <div tw='flex justify-between'>
              <div>
                <p tw='text-xs'>Status</p>
                {/* This from backend */}
                <p tw='py-2 text-paysure-success-100'>SUCCESS</p>

              </div>
              
              <div>
                <p tw='text-xs'>{value[4]}</p>
                {/* This from backend */}
                <p tw='text-right py-2 text-paysure-text-100'>5,000</p>

              </div>
            </div>



          </div>

          <div tw='mt-8 flex justify-between'>
            <Button
            tw='bg-paysure-primary-100 rounded-lg  text-white normal-case text-sm py-3 w-[45%]'
            >
              Pay  again
            </Button>

            <Button
            tw='rounded-lg bg-border hover:bg-blue-500 text-light-dark normal-case text-sm py-3 w-[45%]'
            >
              Download receipt
            </Button>
          </div>

          <p tw='text-paysure-primary-100 text-center mt-12 text-sm'>Set as recurring</p>
        </div>
    </div>
  )
}

export default TransactionSucess