import { Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const CartAddressForm = () => {
  return (
    <Paper>
    <Stack sx={{flexDirection: {xs: "column", md:"row"},}}>
        <Stack sx={{width: {xs:'100%',md:'50%'}, p: 2}} gap={2} >
            <Typography> Shipping Address</Typography>
             <TextField id="outlined-basic" label="Full Name" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Phone Number" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Zip Code" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small' />

        </Stack>
        <Stack sx={{width:  {xs:'100%',md:'50%'}, p: 2}} gap={2} >
            <Typography sx={{visibility: 'hidden'}}>"fff"</Typography>
             <TextField id="outlined-basic" label="Email Address" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Company" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Country" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small' />

        </Stack>
    </Stack>
    </Paper>
  )
}

export default CartAddressForm