import React from 'react'
import tw from 'twin.macro'

const AgentInfo = ({ data }) => {
  const [email,accountNumber,address,bvn,phone] = data
  return (
    <div tw='border-2 rounded-lg px-5 pt-2 pb-8'>
        <h2 tw='pt-2 pb-9'> Agent Information </h2>
        <div tw='flex flex-col gap-y-6'>
            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Email
                <p tw='text-gray-dark'>{email}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Account Number
                <p tw='text-gray-dark'>{accountNumber}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Address
                <p tw='text-gray-dark'>{address}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Bvn
                <p tw='text-gray-dark'>{bvn}</p>
            </div>

            <div tw='flex gap-x-4 font-normal text-sm text-light-dark'>
                Phone number
                <p tw='text-gray-dark'>{phone}</p>
            </div>
        </div>
    </div>
  )
}

export default AgentInfo