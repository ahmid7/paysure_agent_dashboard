
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../../index'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SideBarBillPurchase from '../LeftSideBarBillPurchase'
import RightSideBarBillPurchase from '../RightSideBarBillPurchase'
import { useRouter } from 'next/router'

const TvSubpurchase = () => {

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
        router.push('/billpayment/TvSubPurchase/TvSubTransactionPinPage')
    }

  return ( 
    <MainLayout title= "Bills >> TV subscription">
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'> 
            <div tw='flex '>
                <SideBarBillPurchase value='Tv Subscription'/>

                <form tw=' w-[50%] pt-8'>
                    <div tw='w-[60%] mx-auto'>
                        <div tw=''>
                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Select Operator</label>
                                    <Select
                                    labelId="operator-select-label"
                                    id="operator-select"
                                    value={operator}
                                    onChange={handleOperator }
                                    size='small'
                                    >
                                    <MenuItem value={1}>GoTv</MenuItem>
                                    <MenuItem value={2}>Startimes</MenuItem>
                                    <MenuItem value={3}>NGTV</MenuItem>
                                    <MenuItem value={4}>DStv</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter decoder number
                                </label>

                                <TextField 
                                size='small'
                                placeholder='090123456'
                                tw=''
                                />
                            </div>

                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                <label tw='font-normal text-sm text-black-soft'>Choose Package</label>
                                    <Select
                                    labelId="operator-package-label"
                                    id="operator-package-select"
                                    value={operatorPackage}
                                    onChange={handleOperatorPackage}
                                    size='small'
                                    >
                                    <MenuItem value={1}>Data plan gives 100Gb for N20,000</MenuItem>
                                    <MenuItem value={2}>Data plan gives 100Gb for N20,000</MenuItem>
                                    <MenuItem value={3}>Data plan gives 100Gb for N20,000</MenuItem>
                                    <MenuItem value={4}>Data plan gives 100Gb for N20,000</MenuItem>
                                    </Select>
                                </FormControl>
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

export default TvSubpurchase
