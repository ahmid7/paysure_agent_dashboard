import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Backdrop, Button } from '@mui/material'

import {
  Home,
  Bills,
  Wallet,
  Settlements,
  Transactions,
  Profile
} from '../../SVGIcons'

const SideBar_main_layout = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const { asPath } = useRouter()

  // NavBar styles
  const Nav = styled.nav`
    ${tw`w-[245px] min-w-[245px] h-full bg-gray-light pl-8 py-7 fixed overflow-y-auto z-20 transition-transform transform lg:(transform-none)`}
    ${isSideBarOpen ? tw`translate-x-0` : tw` -translate-x-full`}
  `

  // NavItem Component
  const NavItem = ({ label, icon, link }) => {
    return (
      <li>
        <Link href={`/${link || label.toLowerCase()}`}>
          <a>
            <MUIButton
              fullWidth
              startIcon={icon}
              css={[
                asPath === (link || `/${label.toLowerCase()}`)
                  ? tw`text-paysure-primary-100`
                  : asPath.includes(`/${label.toLowerCase()}`)
                  ? tw`text-paysure-primary-100`
                  : tw`text-gray-700 hover:text-gray-dark`,
              ]}
            >
              <Span>{label}</Span>
            </MUIButton>
          </a>
        </Link>
      </li>
    )
  }

  // fuctions
  const handleBackdropClose = React.useCallback(() => {
    setIsSideBarOpen(!isSideBarOpen)
  })

  return (
    <>
      <Nav>
        <Link href="/">
          <a>
            <Image
              src="/Images/Paysure__.png"
              alt="paysure"
              width="92px"
              height="24px"
            />
          </a>
        </Link>

        <Ul>
          <NavItem label="Home" icon={<Home />} link="/" />
          <NavItem label="Billpayment" icon={<Bills />} />
          <NavItem label="Wallet" icon={<Wallet />} />
          <NavItem label="Settlements" icon={<Settlements />} />
          <NavItem label="Transactions" icon={<Transactions />} />
          <NavItem label="Profile" icon={<Profile />} />
        </Ul>
      </Nav>

      {/* Backdrop */}
      <Backdrop
        open={isSideBarOpen}
        onClick={handleBackdropClose}
        sx={{ zIndex: '10' }}
      />
    </>
  )
}

// Tailwind Styles￼
const Ul = tw.ul`mt-6 space-y-4 lg:(mt-8) xl:(mt-14 space-y-6)`
const Span = tw.span`text-[13px] ml-4`
const MUIButton = tw(Button)`normal-case justify-start `

export default SideBar_main_layout
