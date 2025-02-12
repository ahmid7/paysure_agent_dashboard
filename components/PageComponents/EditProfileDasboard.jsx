import React from 'react'
import { MainLayout} from '../index'
import tw from 'twin.macro'
import ProfileInformation from './ProfileInformation'
import { Button, Divider, SpeedDial, SpeedDialAction } from '@mui/material'

const EditProfileDasboard = () => {
    const actions = [
        { name: 'Security Settings' },
        { name: 'KYC Documents' },
        { name: 'Profile Informationn' },
    ]

    // UseState Hooks
  const [activeTab, setActiveTab] = React.useState('Profile Informationn')

  // Functions
  const handleSetActiveTab = React.useCallback(label => {
    setActiveTab(label)
  })

  const NavItem = ({ label }) => {
    return (
      <li>
        <MUIButton
          sx={[
            activeTab === label
              ? tw`text-paysure-primary-100`
              : tw`text-gray-700`,
          ]}
          fullWidth
          onClick={() => handleSetActiveTab(label)}
        >
          <Span>{label}</Span>
        </MUIButton>
      </li>
    )
  }

  return (
    <>
        <MainLayout title ="Profile">
            <section>
            <SectionsWrapper>
                <div css={[tw`mt-8 hidden xl:block`]}>
                <Ttile className="font-semibold">Profile</Ttile>

                <Nav>
                    <NavItem label="Profile Informationn" />
                    <NavItem label="KYC Documents" />
                    <NavItem label="Security Settings" />
                </Nav>

                </div>

                <Divider
                css={[tw`ml-[85px] mr-10 hidden xl:block 2xl:ml-[125px]`]}
                orientation="vertical"
                flexItem
                />

                {/* sections2 */}
                <div css={[tw`w-full lg:(flex justify-center) xl:mt-8`]}>
                {activeTab === 'Profile Informationn' && <ProfileInformation />}
                {activeTab === 'KYC Documents' && <KYCDocuments />}
                {activeTab === 'Security Settings' && <SecuritySettings />}
                </div>
            </SectionsWrapper>
            </section>
        </MainLayout>

        {/* <SpeedDial
        ariaLabel="SpeedDial"
        sx={tw`fixed bottom-4 right-4 xl:hidden`}
        icon={<Categories />}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            // icon={action.name}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleSetActiveTab(action.name)}
          />
        ))}
      </SpeedDial> */}
    </>
  )
}

// Tailwind styles
const Ttile = tw.h1`text-gray-dark tracking-[-0.05em] text-2xl lg:text-[18px] xl:(text-[18px])`
const SectionsWrapper = tw.div`flex`
const MUIButton = tw(Button)`normal-case justify-start`
const Nav = tw.ul`mt-7 lg:mt-14 space-y-6`
const Span = tw.span`text-base ml-4 whitespace-nowrap`

export default EditProfileDasboard