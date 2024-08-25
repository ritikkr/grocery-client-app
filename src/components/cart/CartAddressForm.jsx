import { Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const CartAddressForm = ({ address, setAddress}) => {


  
  const handleInputChange = (event) =>{
    
    const { name, value } = event.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  } 

  // console.log(address);
  

  return (
    <Paper>
     
    <Stack sx={{flexDirection: {xs: "column", md:"row"},}}>
        <Stack sx={{width: {xs:'100%',md:'50%'}, p: 2}} gap={2} >
            <Typography> Shipping Address</Typography>
            <TextField  name="addressLine1" value={address.addressLine1} onChange={handleInputChange} label="Address Line 1" variant="outlined" size='small' />
            <TextField  name="addressLine2" value={address.addressLine2} onChange={handleInputChange} label="Address Line 2" variant="outlined" size='small'  />
             <TextField   name="zipcode" value={address.zipCode} onChange={handleInputChange} label="Zip Code" variant="outlined" size='small'/>

        </Stack>
        <Stack sx={{width:  {xs:'100%',md:'50%'}, p: 2}} gap={2} >
            <Typography sx={{visibility: 'hidden'}}>"fff"</Typography>
             <TextField  label="City" name="city" value={address.city} onChange={handleInputChange} variant="outlined" size='small' />
             <TextField  label="State" name="state" value={address.state} onChange={handleInputChange} variant="outlined" size='small' />

        </Stack>
    </Stack>
    </Paper>
  )
}

export default CartAddressForm