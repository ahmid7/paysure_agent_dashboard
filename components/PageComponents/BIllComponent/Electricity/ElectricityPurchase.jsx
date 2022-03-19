
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../../index'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SideBarBillPurchase from '../LeftSideBarBillPurchase'
import RightSideBarBillPurchase from '../RightSideBarBillPurchase'
import { useRouter } from 'next/router'

const ElectricityPurchase = () => {

    // remeber t handle the value for every input entered

    const router = useRouter()
    const [operatorPackage, setOperatorPackage] = React.useState('1');

    const handleOperatorPackage = (event) => {
      setOperatorPackage(event.target.value);
    };
    const [operator, setOperator] = React.useState('1');

    const handleOperator = (event) => {
      setOperator(event.target.value);
    };
    
    const handleNextButton = () => {
        router.push('/billpayment/ElectricityPurchase/ElectricityTransactPinPage')
    }

  return ( 
    <MainLayout title= "Bills >> Electricity">
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'> 
            <div tw='flex '>
                <SideBarBillPurchase value='Electricity'/>

                <form tw=' w-[50%] pt-8'>
                    <div tw='w-[60%] mx-auto'>
                        <div tw=''>
                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Select Provider</label>
                                    <Select
                                    labelId="provider-select-label"
                                    id="provider-select"
                                    value={operator}
                                    onChange={handleOperator }
                                    size='small'
                                    >
                                    <MenuItem value={1}>IBEDC</MenuItem>
                                    <MenuItem value={2}>IKEDC</MenuItem>
                                    <MenuItem value={3}>ABEDC</MenuItem>
                                    <MenuItem value={4}>ABUDC</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter meter number
                                </label>

                                <TextField 
                                size='small'
                                placeholder='0230123456'
                                tw=''
                                />
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter amount
                                </label>

                                <TextField 
                                size='small'
                                placeholder='5000'
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

export default ElectricityPurchase
