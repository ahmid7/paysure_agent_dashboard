import { FormLabel, MenuItem, Select, TextField,Button, InputAdornment } from '@mui/material'
import React from 'react'
import tw from 'twin.macro'
import { HideEyeIcons } from '../SVGIcons'

const ProfileInformation = () => {
  const [fname,setfname] = React.useState()
  const [lname,setlname] = React.useState()
  const [bname,setbname] = React.useState()
  const [pNo,setpNo] = React.useState()
  const [email,setEmail] = React.useState()
  const [bvn,setbvn] = React.useState()
  const [dob,setdob] = React.useState()
  const [Gender, setGender] = React.useState('1')
  const handlefname = (e) => {
    setfname(e.target.value)
  }
  const handlelname = (e) => {
    setlname(e.target.value)
  }
  const handlebname = (e) => {
    setbname(e.target.value)
  }
  const handlepNo = (e) => {
    setpNo(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlebvn = (e) => {
    setbvn(e.target.value)
  }
  const handleDob = (e) => {
    setdob(e.target.value)
  }
  const handleGender = (e) => {
      setGender(e.target.value)
  }
  

  return (
    <div tw=''>
        <h2>Profile Information</h2>
        <form tw='mt-5 flex flex-col gap-y-3'>
            <div>
                <p tw='text-black-soft pb-1'>First name</p>
                <TextField
                    fullWidth
                    size='small'
                    placeholder='bukola'
                    value= {fname}
                    onChange= {handlefname}
                />
            </div>
            <div>
                <p tw='text-black-soft pb-1'>Last name</p>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='Sandwich'
                    value= {lname}
                    onChange= {handlelname}
                />
            </div>
            <div>
                <p tw='text-black-soft pb-1'>Business name</p>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='Buzzworld Company'
                    value= {bname}
                    onChange= {handlebname}
                />
            </div>
            <div>
                <p tw='text-black-soft pb-1'>Phone Number</p>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='09019666139'
                    value= {pNo}
                    onChange= {handlepNo}
                />
            </div>
            <div>
                <p tw='text-black-soft pb-1'>Email </p>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='ozenuaOluwatobi@gmail.com'
                    value= {email}
                    onChange= {handleEmail}
                    tw='bg-[#E3E5E8]'
                />
            </div>
            
            <div>
                <p tw='text-black-soft pb-1'>Bvn </p>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='2290345678'
                    value= {bvn}
                    onChange= {handlebvn}
                    InputProps = {{
                        endAdornment:<InputAdornment><HideEyeIcons/></InputAdornment>
                    }}
                />
            </div>
            <div>
                <p tw='text-black-soft pb-1'>date of birth</p>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='DD/MM/YY'
                    value= {dob}
                    onChange= {handleDob}
                />
            </div>
            <FormLabel fullWidth tw='flex flex-col'>
                <label tw='text-black-soft'>Gender</label>
                <Select
                  labelId="Gender-select-label"
                  id="Gender-select"
                  value={Gender}
                  onChange={handleGender}
                  size='small'
                >
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Female</MenuItem>
                    
                </Select>
            </FormLabel>

            <Button
            fullWidth
            tw='text-center mt-10 bg-paysure-primary-100 hover:bg-blue-600 text-white py-3 rounded-xl normal-case'
            >
                Save changes
            </Button>
        </form>
    </div>
  )
}

export default ProfileInformation