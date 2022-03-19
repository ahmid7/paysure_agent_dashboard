import React from 'react'
import tw from 'twin.macro'
import { MainLayout,DataGridViewTemp } from '../index'
import { Button, FormControl, Select, TextField,MenuItem } from '@mui/material'
import Modal from '../layouts/modal/ModalLayout'
import OtpInput from "react-otp-input";
import { FundWalletSucess } from '../SVGIcons'

const WalletDashboard = () => {
  const walletBalance = '350,000'
  
  const rows = [
    {
      id: 1,
      col1: 1,
      col2: 'Wallet History',
      col3: 'RRR 2542255466',
      col4: 'N3,000.00',
      col5: 'N3,000.00',
      col6: 'N3,000.00',
      col7: 'Dec 30, 2019 07:52',
      col8: '',
    },
    {
      id: 2,
      col1: 2,
      col2: 'Wallet History',
      col3: 'RRR 2542255466',
      col4: 'N3,000.00',
      col5: 'N3,000.00',
      col6: 'N3,000.00',
      col7: 'Dec 30, 2019 07:52',
      col8: '',
    },
    {
      id: 3,
      col1: 3,
      col2: 'Wallet History',
      col3: 'RRR 2542255466',
      col4: 'N3,000.00',
      col5: 'N3,000.00',
      col6: 'N3,000.00',
      col7: 'Dec 30, 2019 07:52',
      col8: '',
    },
    {
      id: 4,
      col1: 4,
      col2: 'Wallet History',
      col3: 'RRR 2542255466',
      col4: 'N3,000.00',
      col5: 'N3,000.00',
      col6: 'N3,000.00',
      col7: 'Dec 30, 2019 07:52',
      col8: '',
    },
    {
      id: 5,
      col1: 5,
      col2: 'Wallet History',
      col3: 'RRR 2542255466',
      col4: 'N3,000.00',
      col5: 'N3,000.00',
      col6: 'N3,000.00',
      col7: 'Dec 30, 2019 07:52',
      col8: '',
    },
  ]

  const columns = [
    {
      field: 'col1',
      headerName: 'S/N',
      minWidth: 60,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col2',
      headerName: 'Transaction type',
      minWidth: 200,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col3',
      headerName: 'Description',
      minWidth: 180,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Debit',
      minWidth: 150,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'Credit',
      minWidth: 150,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col6',
      headerName: 'Balance after',
      minWidth: 150,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col7',
      headerName: 'Date',
      minWidth: 160,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col8',
      headerName: 'Action',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
            {params.row.col8}
          </span>
        )
      },
    },
  ]

  const [isModalOpen, setisModalOpen] = React.useState(false)
  const [isModalCardOpen,setIsModalCardOpen] = React.useState(false)
  const [isModalOtpOpen,SetIsModalOtpOpen] = React.useState(false)
  const [isModalWalletSuccess,setisModalWalletSuccess] = React.useState()
  const [isModalWalletWithdraw,setIsModalWalletWithdraw ] = React.useState()
  const [isModalBank, setIsModalBank] = React.useState()
  const [isModalWithdrawSucess,setIsModalWithdrawSucess] = React.useState()
  const [FundAmount,setFundAmount] = React.useState()
  const [cardNum,setcardNum] = React.useState()
  const [ExpDate,setExpDate] = React.useState()
  const [cvv,setCvv] = React.useState()
  const [ otp,setOtp ] = React.useState()
  const [withdrawAmount, setWithdrawAmount] = React.useState()
  const [bank, setBank] = React.useState('')

  const handleFundAmount = (e) => {
    setFundAmount(e.target.value)
  }
  const handleCardNum = (e) => {
    setcardNum(e.target.value)
  }
  const handleExpDate = (e) => {
    setExpDate(e.target.value)
  }
  const handleCvv = (e) => {
    setCvv(e.target.value)
  }
  const handleOtpSubmit= (otp) => {
    setOtp(otp)
  }
  const handleWithdrawAmount = (e) => {
    setWithdrawAmount(e.target.value)
  }

  const handleBank = (e) => {
    setBank(e.target.value)
  }

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


                    {/* fund wallet modal */}
                    <Modal state={isModalOpen} setState= {setisModalOpen} title='Fund Wallet'>
                        <section tw=''>
                          <div tw='py-28 '>
                              <div tw='flex justify-center'>

                                <div tw=''>
                                  <input
                                  tw='text-center border-0 focus:outline-none text-3xl text-black'
                                  placeholder='0.00'
                                  value = {FundAmount}
                                  onChange = { handleFundAmount }
                                  />
                                </div>
                            
                              </div>
                              <p tw='text-center mt-5'>Enter Amount</p>
                          </div>

                            <Button
                            tw='text-center bg-paysure-primary-100 hover:bg-blue-600 text-white py-5 rounded-xl normal-case '
                            fullWidth
                            onClick= {() => {setIsModalCardOpen(true),setisModalOpen(false)}}
                            >
                              Continue
                            </Button>
                        </section>
                    </Modal>


                    {/* New Card Wallet */}
                    <Modal state={isModalCardOpen} setState={setIsModalCardOpen} title='New Card'>
                        <section tw='pt-8 pb-4'>
                          <div>
                            <p tw='pb-1 text-black-soft'>Enter card number</p>
                            <TextField
                              fullWidth
                              placeholder='0000 0000 0000 0000'
                              value = {cardNum}
                              onChange= { handleCardNum }
                            />
                          </div>

                          <div tw='grid grid-cols-2 gap-x-4 mt-8'>
                            <div>
                              <p tw='pb-1 text-black-soft'>Enter Exp date</p>
                              <TextField
                                fullWidth
                                placeholder=''
                                value = {ExpDate}
                                onChange= { handleExpDate }
                              />
                            </div>

                            <div>
                                <p tw='pb-1 text-black-soft'>Enter CVV</p>
                                <TextField
                                  fullWidth
                                  placeholder=''
                                  value = {cvv}
                                  onChange= { handleCvv }
                                />
                            </div>
                          </div>

                          <Button
                          tw='text-center mt-9 bg-paysure-primary-100 hover:bg-blue-600 text-white py-5 rounded-xl normal-case '
                          fullWidth
                          onClick = {() => {SetIsModalOtpOpen(true),setIsModalCardOpen(false)}}
                          >
                            Continue
                          </Button>

                        </section>
                    </Modal>

                    {/* Otp verification  */}
                    <Modal state= {isModalOtpOpen} setState={SetIsModalOtpOpen} title = 'Enter OTP'>
                        <section tw='pt-12 pb-6'>
                            <div>
                              {/* otp label */}
                              <p tw='text-center text-black-soft'>A one time password was sent to you</p>

                              {/* otp box */}
                              <div tw='pb-4 pt-5 '>
                                <OtpInput
                                numInputs={ 6 }
                                value = { otp }
                                onChange = { handleOtpSubmit }
                                inputStyle = {{ 
                                    width:'100%',
                                    height:'60px',
                                    fontSize:'16px',
                                    color:'#3E3E3E',
                                    padding:'0px 10px',
                                    marginRight:'10px',
                                    borderRadius:'5px',
                                    border:'1px solid #E3E5E8'
                                }}
                                />

                              </div>
                              
                              <p tw='text-center mt-6'>Didnt receive code? <span tw='text-paysure-primary-100'>Request Again</span></p>
                            </div>
                            
                            {/* submit button */}
                            <Button
                            fullWidth
                            tw='text-center mt-9 bg-paysure-primary-100 hover:bg-blue-600 text-white py-5 rounded-xl normal-case'
                            onClick={() => {setisModalWalletSuccess(true),SetIsModalOtpOpen(false)}}
                            >
                              Complete
                            </Button>
                        </section>
                    </Modal>
                    
                    {/* Wallet funded sucess modal */}

                    <Modal state={isModalWalletSuccess} setState = {setisModalWalletSuccess} title = 'Select Card'>
                      <section tw='text-center'>
                          <div tw='flex justify-center'>
                            <FundWalletSucess/>
                          </div>

                          <p tw='font-semibold text-xl pt-3'>Transaction Successfull</p>

                          <p tw='py-3 text-[#666666] text-sm'>{`N${FundAmount} has been added to your wallet `}</p>

                          <Button
                            fullWidth
                            tw='text-center mt-12 font-normal  bg-paysure-primary-100 hover:bg-blue-600 text-white py-5 rounded-xl normal-case'
                            onClick={() => {setisModalWalletSuccess(false)}}
                          >
                            Proceed
                          </Button>
                      </section>

                    </Modal>

                    {/* Withdraw from wallet */}
                    <Modal state = {isModalWalletWithdraw} setState = { setIsModalWalletWithdraw } title = 'Withdraw'>
                      <section tw=''>
                        <div tw='py-28 '>
                            <div tw='flex justify-center'>

                              <div tw=''>
                                <input
                                tw='text-center border-0 focus:outline-none text-3xl text-black'
                                placeholder='0.00'
                                value = {withdrawAmount}
                                onChange = { handleWithdrawAmount }
                                />
                              </div>
                          
                            </div>
                            <p tw='text-center mt-5'>Enter Amount</p>
                        </div>

                          <Button
                          tw='text-center bg-paysure-primary-100 hover:bg-blue-600 text-white py-5 rounded-xl normal-case '
                          fullWidth
                          onClick= {() => {setIsModalBank(true),setIsModalWalletWithdraw(false)}}
                          >
                            Continue
                          </Button>
                      </section>
                    </Modal>
                      {/* withdraw to bank */}
                    <Modal state = {isModalBank} setState = {setIsModalBank} title = 'Select Bank'>
                      <section tw='pt-6'>
                        <FormControl fullWidth>
                          <label tw='text-black-soft pb-1 '>Select bank</label>
                          <Select
                            labelId="Bank-select-label"
                            id="Bank-select"
                            value={bank}
                            onChange={handleBank }
                            size='small'
                          >
                            <MenuItem value={1}>GTBank</MenuItem>
                            <MenuItem value={2}>Acess bank</MenuItem>
                            <MenuItem value={3}>Fcmb</MenuItem>
                            <MenuItem value={4}>Zenith Bank</MenuItem>
                          </Select>
                        </FormControl>

                        <Button
                        fullWidth
                        tw='text-center mt-24 bg-paysure-primary-100 hover:bg-blue-600 text-white py-3 rounded-xl normal-case'
                        onClick = {() => {setIsModalWithdrawSucess(true), setIsModalBank(false)}}
                        >
                          Continue
                        </Button>
                      </section>
                    </Modal>
                        {/* withdraw sucess */}
                    <Modal state={isModalWithdrawSucess} setState = {setIsModalWithdrawSucess}>
                      <section tw='text-center'>
                          <div tw='flex justify-center'>
                            <FundWalletSucess/>
                          </div>

                          <p tw='font-semibold text-xl pt-3'>Transaction Successfull</p>

                          <p tw='py-2 font-normal text-sm text-[#666666]'>Your withdrawal request has been submitted</p>

                          <Button
                            fullWidth
                            tw='text-center mt-12 font-normal  bg-paysure-primary-100 hover:bg-blue-600 text-white py-4 rounded-xl normal-case'
                            onClick={() => {setIsModalWithdrawSucess(false)}}
                          >
                            Proceed
                          </Button>
                      </section>
                    </Modal>

                    <div tw='flex '>
                        <Button
                        variant ='contained'
                        tw='py-3 text-sm rounded-lg px-12 normal-case mr-4 bg-paysure-primary-100'
                        onClick = {() => {setisModalOpen(true)} }
                        >
                          Fund Wallet
                        </Button>
                        <Button
                        variant = 'contained'
                        tw='py-3 text-sm rounded-lg px-12 normal-case ml-4 bg-dark '
                        onClick = {() => {setIsModalWalletWithdraw(true)}}
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
                
                />
            </div>
        </section>
    </MainLayout>
  )
}


export default WalletDashboard 