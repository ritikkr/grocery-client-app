import { Person } from '@mui/icons-material'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from '../../hooks/useProvideAuth';
import axios from 'axios';

const Account = () => {
    const [isEdit, setIsEdit] = useState(false);
    const {user, updateUser} = useAuth()
    const [userdetail, setUserDetail] = useState({
        firstName:  user?.firstName,
        lastName:  user?.lastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        city: user.address?.city,
        zipCode: user?.address?.city,
        state: user?.address?.state,
        addressLine1: user?.address?.addressLine1,
        addressLine2: user?.address?.addressLine2
    })

    console.log(user);
    


    const handleSubmit = () => {
        axios.put(`/api/user`,{
            userId: user.id,
            firstName: userdetail.firstName,
            lastName: userdetail.lastName,
            phoneNumber: userdetail.phoneNumber,
            address: {
                addressLine1:userdetail.addressLine1,
                addressLine2: userdetail.addressLine2,
                city: userdetail.city,
                state: userdetail.state,
                zipCode: userdetail.zipCode
            }
        },{
            headers: {
              Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
            }
          })
          .then((res) => {
          
            updateUser(res.data)
                
            
          })
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
                    <TextField id="outlined-basic" placeholder="First Name" hiddenLabel variant="outlined" size='small' value={userdetail.firstName} onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            firstName: e.target.value
                        })
                    }} InputProps={{
                        readOnly: !isEdit && true,
                    }} />
                      <TextField id="outlined-basic" placeholder="Last Name" hiddenLabel variant="outlined" size='small' value={userdetail.name} onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            name: e.target.value
                        })
                    }} InputProps={{
                        readOnly: !isEdit && true,
                    }} />
                    <TextField id="outlined-basic" placeholder="Phone Number" hiddenLabel variant="outlined" size='small' value={userdetail.phoneNumber}  onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            phoneNumber: e.target.value
                        })
                    }}  InputProps={{
                        readOnly: !isEdit && true,
                    }} />
                    <TextField id="outlined-basic" placeholder="Zip Code" hiddenLabel variant="outlined" size='small' value={userdetail.zipCode} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            zipCode: e.target.value
                        })
                    }} 
                    />
                    <TextField id="outlined-basic" placeholder="Address 1" hiddenLabel variant="outlined" size='small' value={userdetail.addressLine1} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    
                    onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            addressLine1: e.target.value
                        })
                    }} />

                </Stack>
                <Stack sx={{ width: { xs: '100%', md: '50%' }, p: 2 }} gap={2} >
                    <TextField id="outlined-basic" placeholder="Email Address" hiddenLabel variant="outlined" size='small' value={userdetail.email} InputProps={{
                        readOnly:  true,
                    }} 
                    
                   
                    />
                    <TextField id="outlined-basic" placeholder="City" hiddenLabel variant="outlined" size='small' value={userdetail.city} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    
                    onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            city: e.target.value
                        })
                    }} />
                    <TextField id="outlined-basic" placeholder="State" hiddenLabel variant="outlined" size='small' value={userdetail.state} InputProps={{
                        readOnly: !isEdit && true,
                    }} 
                    
                    onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
                            state: e.target.value
                        })
                    }} />
                    <TextField id="outlined-basic" placeholder="Address 2" hiddenLabel variant="outlined" size='small' value={userdetail.addressLine2} InputProps={{
                        readOnly: !isEdit && true,
                    }}
                    onChange={(e) => {
                        setUserDetail({
                            ...userdetail,
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