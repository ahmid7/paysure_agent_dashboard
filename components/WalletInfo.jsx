import React from 'react'
import tw from 'twin.macro'

const WalletInfo = ({ data }) => {
  const [accountNumber,createOn,availableBalnce,WalletId,ChargeBack] = data
  return (
    <div tw='border-2 rounded-lg px-5 pt-2 pb-8'>
        <h2 tw='pt-2 pb-9'> Wallet Information </h2>
        <div tw='flex flex-col gap-y-6'>
            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Account number
                <p tw='text-gray-dark'>{accountNumber}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Create On
                <p tw='text-gray-dark'>{createOn}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Available Balance
                <p tw='text-gray-dark'>{availableBalnce}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Wallet ID
                <p tw='text-gray-dark'>{WalletId}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Charge back
                <p tw='text-gray-dark'>{ChargeBack}</p>
            </div>
        </div>
    </div>
  )
}

export default WalletInfo