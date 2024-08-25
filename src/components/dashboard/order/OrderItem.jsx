import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OrderStepper from './OrderStepper'
import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import axios from 'axios'
import { useAuth } from '../../hooks/useProvideAuth'

const OrderItem = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const [order, setOrder] = useState(null)

    const shippingFee = 50;
    const discount = 18;

    
    
    useEffect(() => {
        axios.get(`/api/order/${id}`,{
          headers: {
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
          }
        })
        .then((res) => {
          console.log("orderItem", res.data);
          
          setOrder(res.data)
        })
      }, [])

      const jsDate = new Date(order?.orderDate);
      const formattedDate = jsDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      const formattedTime = jsDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

  return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
            <OrderStepper />
            <Paper>
                <Stack sx={{p: 2}}>
                    <Stack direction={"row"} justifyContent={"space-between"} sx={{background: '#f3f5f9', p: 2}}>
                        <Typography>Order ID: {order?.orderId}</Typography>
                        {/* <Typography>Placed On: {order?.orderDate}</Typography> */}
                        <Typography>Placed On: {formattedDate} {formattedTime}</Typography>

                        {/* <Typography>Delivered On: 12 Dec 2012</Typography> */}
                    </Stack>
                   
                    {order?.orderItems?.map((item) => (
                        <Stack direction={"row"} justifyContent={"space-between"} sx={{background: '#fff', p: 2, height: 150}} alignItems={"center"}>
                            <Box sx={{width: {xs:'30%', md:'10%'}, display: 'flex', justifyContent: "center", alignItems: 'center'}}>
                                <img src={item.product.imageUrl} style={{width:'100%', objectFit: 'contain'}} />
                                <Typography>{item.product.name}</Typography>
                            </Box>
                            
                        <Typography sx={{color: 'gray'}}>${item.product.price} X {item.quantity}</Typography>

                        <Typography sx={{fontWeight: 'medium'}}>${item.product.price * item.quantity}</Typography>
                        </Stack>
                    ))}
                    <Divider />
                    <Typography sx={{alignSelf: 'flex-end', mt: 4, fontWeight: 'bold'}}>Total: {order?.totalAmount}</Typography>
                </Stack>
            </Paper>
            <Box sx={{display: 'flex', gap: 4}}>
            <Paper sx={{width: '40%', p:3}}>
                       <Typography sx={{fontWeight: 'bold'}}> Shipping Address </Typography>
                       <Typography>{order?.shippingAddress?.addressLine1 + ", " + 
                        order?.shippingAddress?.addressLine2 + ", "+
                        order?.shippingAddress?.city + ", "+
                        order?.shippingAddress?.state + ", "+
                        order?.shippingAddress?.zipcode } </Typography>

            </Paper>
            <Paper sx={{width: '60%', p:3}}>
                        <Stack gap={2}>
                            <Typography>Total Summary</Typography>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Subtotal:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>${order?.totalAmount}</Typography>
                            </Stack>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Shipping Fee:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>${shippingFee}</Typography>
                            </Stack>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Discount:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>${discount}</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography>Total:</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>${order?.totalAmount + shippingFee - discount}</Typography>
                            </Stack>
                            <Typography> Paid By Credit/Debit Card</Typography>
                        </Stack>
            </Paper>
            </Box>
        </Box>
  )
}

export default OrderItem