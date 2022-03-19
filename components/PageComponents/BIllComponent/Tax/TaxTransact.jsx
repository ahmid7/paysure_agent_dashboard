
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../../index'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SideBarBillPurchase from '../LeftSideBarBillPurchase'
import RightSideBarBillPurchase from '../RightSideBarBillPurchase'
import { useRouter } from 'next/router'

const TaxTransact = () => {

    const router = useRouter()
    const [state, setState] = React.useState('1');

    const handleState = (event) => {
      setState(event.target.value);
    };
    const [revenue, setRevenue] = React.useState('1');

    const handleRevenue = (event) => {
      setOperator(event.target.value);
    };

    const [tax, setTax] = React.useState('1');

    const handleTax = (event) => {
      setTax(event.target.value);
    };
    
    const handleNextButton = () => {
        router.push('/billpayment/Taxpayment/TaxTransactPinPage')
    }

  return ( 
    <MainLayout title= "Bills >> Tax">
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'> 
            <div tw='flex '>
                <SideBarBillPurchase value='Tax'/>

                <form tw=' w-[50%] pt-8'>
                    <div tw='w-[60%] mx-auto'>
                        <div tw=''>
                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Select State</label>
                                    <Select
                                    labelId="state-select-label"
                                    id="State-select"
                                    value={state}
                                    onChange={handleState }
                                    size='small'
                                    >
                                    <MenuItem value={1}>lagos</MenuItem>
                                    <MenuItem value={2}>Ogun</MenuItem>
                                    <MenuItem value={3}>Kwara</MenuItem>
                                    <MenuItem value={4}>Ogun</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Select revenue head</label>
                                    <Select
                                    labelId="revenue-head-select-label"
                                    id="reveue-select"
                                    value={revenue}
                                    onChange={handleRevenue }
                                    size='small'
                                    >
                                    <MenuItem value={1}>lagos</MenuItem>
                                    <MenuItem value={2}>Ogun</MenuItem>
                                    <MenuItem value={3}>Kwara</MenuItem>
                                    <MenuItem value={4}>Ogun</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Select tax</label>
                                    <Select
                                    labelId="revenue-head-select-label"
                                    id="reveue-select"
                                    value={tax}
                                    onChange={handleTax }
                                    size='small'
                                    >
                                    <MenuItem value={1}>LIRS</MenuItem>
                                    <MenuItem value={2}>OGIRS</MenuItem>
                                    <MenuItem value={3}>KIRS</MenuItem>
                                    <MenuItem value={4}>TIRS</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter full name
                                </label>

                                <TextField 
                                size='small'
                                placeholder='Ozenua Oluwatobi'
                                tw=''
                                />
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter email
                                </label>

                                <TextField 
                                size='small'
                                placeholder='johndoe@gmail.com'
                                tw=''
                                />
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter Phone Number
                                </label>

                                <TextField 
                                size='small'
                                placeholder='+234 (0) 9019666139'
                                tw=''
                                />
                            </div>

                            <Button fullWidth
                            tw='bg-paysure-primary-100 mt-10 hover:bg-blue-500 text-white normal-case text-sm py-3'
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

export default TaxTransact
