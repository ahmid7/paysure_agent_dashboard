
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../index'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SideBarBillPurchase from './LeftSideBarBillPurchase'
import RightSideBarBillPurchase from './RightSideBarBillPurchase'
import { useRouter } from 'next/router'

const AirtimePurchase = () => {

    const router = useRouter()
    const [network, setNetwork] = React.useState('');

    const handleChange = (event) => {
      setNetwork(event.target.value);
    };
    
    const handleNextButton = () => {
        router.push('/billpayment/purchase/AirtimeTransactionPinPage')
    }

  return ( 
    <MainLayout title= "Bills >> Airtime">
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'> 
            <div tw='flex '>
                <SideBarBillPurchase/>

                <form tw=' w-[50%] pt-8'>
                    <div tw='w-[60%] mx-auto'>
                        <div tw=''>
                            <div tw='flex flex-col gap-y-1'>
                                <label tw='font-normal text-sm'>
                                    Amount
                                </label>

                                <TextField 
                                size='small'
                                placeholder='N5000'
                                tw=''
                                />
                            </div>

                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                <label tw='font-normal text-sm'>Network</label>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={network}
                                    onChange={handleChange}
                                    size='small'
                                    >
                                    <MenuItem value={10}>Airtel</MenuItem>
                                    <MenuItem value={20}>Mtn</MenuItem>
                                    <MenuItem value={30}>Etisalat</MenuItem>
                                    <MenuItem value={40}>Glo</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm'>
                                    Phone Number
                                </label>

                                <TextField 
                                size='small'
                                placeholder='090123456'
                                tw=''
                                />
                            </div>

                            <div tw='mt-6'>
                                <p tw='font-normal text-sm'>Add to beneficiary</p>
                            </div>

                            <Button fullWidth
                            tw='bg-paysure-primary-100 mt-10 hover:bg-blue-500 text-white normal-case text-sm py-4'
                            onClick = { handleNextButton }
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                        
                </form>

                <RightSideBarBillPurchase/>

            </div>
        </section>
    </MainLayout>
  )
}

export default AirtimePurchase
