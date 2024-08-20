import React from 'react'
import { useParams } from 'react-router-dom'
import OrderStepper from './OrderStepper'
import { Box, Divider, Paper, Stack, Typography } from '@mui/material'

const OrderItem = () => {
    const {param} = useParams()
  return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
            <OrderStepper />
            <Paper>
                <Stack sx={{p: 2}}>
                    <Stack direction={"row"} justifyContent={"space-between"} sx={{background: '#f3f5f9', p: 2}}>
                        <Typography>Order ID: 1245564</Typography>
                        <Typography>Placed On: 10 Nov 2012</Typography>
                        <Typography>Delivered On: 12 Dec 2012</Typography>
                    </Stack>
                   
                    {[1,2,3].map((item) => (
                        <Stack direction={"row"} justifyContent={"space-between"} sx={{background: '#fff', p: 2, height: 100}} alignItems={"center"}>
                            <Box sx={{width: {xs:'30%', md:'10%'}, display: 'flex', justifyContent: "center", alignItems: 'center'}}>
                                <img src='https://bazaar.ui-lib.com/assets/images/products/Automotive/2.Audi2017.png' style={{width:'100%', objectFit: 'contain'}} />
                                <Typography>Amul</Typography>
                            </Box>
                            
                        <Typography sx={{color: 'gray'}}>$3242 X 4</Typography>

                        <Typography sx={{fontWeight: 'medium'}}>$6466</Typography>
                        </Stack>
                    ))}
                    <Divider />
                    <Typography sx={{alignSelf: 'flex-end', mt: 4, fontWeight: 'bold'}}>Total: $13525</Typography>
                </Stack>
            </Paper>
            <Box sx={{display: 'flex', gap: 4}}>
            <Paper sx={{width: '40%', p:3}}>
                       <Typography sx={{fontWeight: 'bold'}}> Shipping Address </Typography>
                       <Typography>Sant nagar, Delhi </Typography>

            </Paper>
            <Paper sx={{width: '60%', p:3}}>
                        <Stack gap={2}>
                            <Typography>Total Summary</Typography>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Subtotal:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>$350.00</Typography>
                            </Stack>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Shipping Fee:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>$120.00</Typography>
                            </Stack>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Discount:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>$32.00</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Total:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>$4532.00</Typography>
                            </Stack>
                            <Typography> Paid By Credit/Debit Card</Typography>
                        </Stack>
            </Paper>
            </Box>
        </Box>
  )
}

export default OrderItem