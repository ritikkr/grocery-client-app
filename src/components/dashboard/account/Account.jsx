import { Person } from '@mui/icons-material'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Account = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [user, setUser] = useState({
        name: 'Ritik Kumar',
        email: 'rk@abc.com',
        phoneNumber: '987654219',
        company: '',
        zipCode: '110084',
        country: 'India',
        addressLine1: 'Sant Nagr Burari',
        addressLine2: 'Delhi'
    })



    const handleSubmit = () => {
        setIsEdit(false);
    }
    const handleEdit = () => {
        setIsEdit(true)
    }
    return (
        <Box sx={{ p: 3, minHeight:'80vh'}}>

            <Typography variant='h4'> <Person /> My Account</Typography>
            <Stack sx={{ flexDirection: { xs: "column", md: "row" }, }}>
                <Stack sx={{ width: { xs: '100%', md: '50%' }, p: 2 }} gap={2} >
                    <TextField id="outlined-basic" label="Full Name" hiddenLabel variant="outlined" size='small' value={user.name} onChange={(e) => {
                        setUser({
                            ...user,
                            name: e.target.value
                        })
                    }} InputProps={{
                        readOnly: !isEdit && true,
                    }} />
                    <TextField id="outlined-basic" label="Phone Number" hiddenLabel variant="outlined" size='small' value={user.phoneNumber}  onChange={(e) => {
                        setUser({
                            ...user,
                            phoneNumber: e.target.value
                        })
                    }}  InputProps={{
                        readOnly: !isEdit && true,
                    }} />
                    <TextField id="outlined-basic" label="Zip Code" hiddenLabel variant="outlined" size='small' value={user.zipCode} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    onChange={(e) => {
                        setUser({
                            ...user,
                            zipCode: e.target.value
                        })
                    }} 
                    />
                    <TextField id="outlined-basic" label="Address 1" hiddenLabel variant="outlined" size='small' value={user.addressLine1} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    
                    onChange={(e) => {
                        setUser({
                            ...user,
                            addressLine1: e.target.value
                        })
                    }} />

                </Stack>
                <Stack sx={{ width: { xs: '100%', md: '50%' }, p: 2 }} gap={2} >
                    <TextField id="outlined-basic" label="Email Address" hiddenLabel variant="outlined" size='small' value={user.email} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} 
                    />
                    <TextField id="outlined-basic" label="Company" hiddenLabel variant="outlined" size='small' value={user.company} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    
                    onChange={(e) => {
                        setUser({
                            ...user,
                            company: e.target.value
                        })
                    }} />
                    <TextField id="outlined-basic" label="Country" hiddenLabel variant="outlined" size='small' value={user.country} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    
                    onChange={(e) => {
                        setUser({
                            ...user,
                            country: e.target.value
                        })
                    }} />
                    <TextField id="outlined-basic" label="Address 2" hiddenLabel variant="outlined" size='small' value={user.addressLine2} InputProps={{
                        readOnly: !isEdit && true,
                    }}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            addressLine2: e.target.value
                        })
                    }}  />

                </Stack>

            </Stack>
            <Button variant='contained' sx={{ m: 3 }} disabled={!isEdit} onClick={handleSubmit}>Submit</Button>
            <Button variant='contained' onClick={handleEdit} disabled={isEdit}> Edit</Button>

        </Box>
    )
}

export default Account