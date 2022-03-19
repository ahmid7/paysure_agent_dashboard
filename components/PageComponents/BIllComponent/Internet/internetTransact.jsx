
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../../../index'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SideBarBillPurchase from '../LeftSideBarBillPurchase'
import RightSideBarBillPurchase from '../RightSideBarBillPurchase'
import { useRouter } from 'next/router'

const Internet = () => {

    const router = useRouter()
    const [provider, setProvider] = React.useState('1');

    const handleProvider = (event) => {
      setProvider(event.target.value);
    };
    
    const handleNextButton = () => {
        router.push('/billpayment/InternetPurchase/InternetTransactPinPage')
    }

  return ( 
    <MainLayout title= "Bills >> Internet">
        <section tw='border-t-2 border-[#E4ECF7]  -mt-8'> 
            <div tw='flex '>
                <SideBarBillPurchase value='Internet'/>

                <form tw=' w-[50%] pt-8'>
                    <div tw='w-[60%] mx-auto'>
                        <div tw=''>
                            <div tw='mt-5'>
                                <FormControl fullWidth>
                                    <label tw='font-normal text-sm text-black-soft'>Select Provider</label>
                                    <Select
                                    labelId="provider-select-label"
                                    id="provider-select"
                                    value={provider}
                                    onChange={handleProvider }
                                    size='small'
                                    >
                                    <MenuItem value={1}>Spectranet</MenuItem>
                                    <MenuItem value={2}>Ogun</MenuItem>
                                    <MenuItem value={3}>Kwara</MenuItem>
                                    <MenuItem value={4}>Ogun</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>


                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter phoneNumber
                                </label>

                                <TextField 
                                size='small'
                                placeholder='+234 (0) 9019666139'
                                tw=''
                                />
                            </div>

                            <div tw='flex flex-col gap-y-1 mt-4'>
                                <label tw='font-normal text-sm text-black-soft'>
                                    Enter amount
                                </label>

                                <TextField 
                                size='small'
                                placeholder='N5000'
                                tw='text-sm'
                                />
                            </div>

                            <Button fullWidth
                            tw='bg-paysure-primary-100 rounded-lg mt-10 hover:bg-blue-500 text-white normal-case text-sm py-3'
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

export default Internet
