import { ArrowForward, Forward, ForwardOutlined, NextPlan, ShoppingBag } from '@mui/icons-material'
import { Box, Chip, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { orderItems } from '../../_mock/order'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useProvideAuth'
import axios from 'axios'

const chipColor = { 
  'Delivered': 'green',
  'CONFIRMED': 'orange',
  'Shipped': '#ABDDE1',

}
const Order = () => {
  const[ orders, setOrders] = useState([]);
  const navigate = useNavigate()
  const {user} = useAuth()

  function handleOrderItemView(id) {
    navigate(`/app/orders/${id}`)
  }

  useEffect(() => {
    axios.get(`/api/order/user/${user.id}`,{
      headers: {
        Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
      }
    })
    .then((res) => {
      console.log("orders", res.data);
      
      setOrders(res.data)
    })
  }, [])

  return (
    <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
      <Stack direction={"row"} gap={2} justifyContent={"flex-start"} alignContent={"center"}>
        <ShoppingBag sx={{ height: 25, width: 25 }} />
        <Typography variant='h5'>My Orders</Typography>
      </Stack>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        {orders.map((order) => (
          <Link to={`${order.orderId}`} style={{textDecoration: 'none'}}>
          <Paper >
            <Stack direction={"row"} justifyContent={"space-between"} sx={{ p: 3 }} alignItems={"center"}>
              <Box sx={{width: {xs:'20%',md:'40%'}}}>
                <Typography sx={{ fontWeight: 'bold' }}>{order.orderId}</Typography>
              </Box>
              <Box  sx={{width: {xs: '20%', md:'20%'}, justifyContent:"center", alignItems: 'center'}}>

                <Typography> <Chip label={order.orderStatus} sx={{background: chipColor[order.orderStatus], minWidth: {xs: 70,md: 100}}} size='small'/></Typography>
              </Box>

              <Box  sx={{width: '20%'}}>

                <Typography sx={{ fontSize: {xs:14,md:16}}}>{order.orderDate}</Typography>
              </Box>

              <Box  sx={{width: {xs:'5%' ,md:'10%'}}}>

                <Typography>${order.totalAmount}</Typography>
              </Box>

              <Box  sx={{width:  {xs:'10%' ,md:'10%'}, display: 'flex', justifyContent:'flex-end' }}>

                <IconButton onClick={() => handleOrderItemView(order.orderId)}><ArrowForward /></IconButton>
              </Box>


            </Stack>
          </Paper>
          </Link>
        ))}

      </Box>
    </Box>
  )
}

export default Order