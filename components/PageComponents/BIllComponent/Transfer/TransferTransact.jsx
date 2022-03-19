
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../../index'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SideBarBillPurchase from '../LeftSideBarBillPurchase'
import RightSideBarBillPurchase from '../RightSideBarBillPurchase'
import { useRouter } from 'next/router'

const TransferTransact = () => {

    const router = useRouter()
    // const [operatorPackage, setOperatorPackage] = React.useState('1');

    // const handleOperatorPackage = (event) => {
    //   setOperatorPackage(event.target.value);
    // };
    const [operator, setOperator] = React.useState('1');

    const handleOperator = (event) => {
      setOperator(event.target.value);
    };
    
    const handleNextButton = () => {
        router.push('/billpayment/TransferTransaction/TransferTransactPinPage')
    }

  return ( 
    <MainLayout title= "Bills >> Transfer">
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'> 
            <div tw='flex '>
                <SideBarBillPurchase value='Transfer'/>

                <form tw=' w-[50%] pt-8'>
                    <div tw='w-[60%] mx-auto'>
                        <div tw=''>
                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Bank</label>
                                    <Select
                                    labelId="operator-select-label"
                                    id="operator-select"
                                    value={operator}
                                    onChange={handleOperator }
                                    size='small'
                                    >
                                    <MenuItem value={1}>GTBank</MenuItem>
                                    <MenuItem value={2}>Acess bank</MenuItem>
                                    <MenuItem value={3}>Fcmb</MenuItem>
                                    <MenuItem value={4}>Zenith Bank</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Account Number
                                </label>

                                <TextField 
                                size='small'
                                placeholder='0289071209'
                                tw=''
                                />
                            </div>

                            
                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Receipient name
                                </label>

                                <TextField 
                                size='small'
                                placeholder='Ozenua Oluwatobi'
                                tw=''
                                />
                            </div>
                           

                            <div tw='mt-6'>
                                <p tw='font-normal text-sm'>Add to beneficiary</p>
                            </div>

                            <Button fullWidth
                            tw='bg-paysure-primary-100 mt-10 hover:bg-blue-500 text-white normal-case text-sm py-3'
                            onClick = { handleNextButton }
                            >
                                Next
                            </Button>

                            <p tw='text-sm text-center mt-12 text-paysure-primary-100'>Select a beneficiary</p>
                        </div>
                    </div>
                        
                </form>

                <RightSideBarBillPurchase/>

            </div>
        </section>
    </MainLayout>
  )
}

export default TransferTransact
