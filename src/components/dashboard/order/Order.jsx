import { ArrowForward, Forward, ForwardOutlined, NextPlan, ShoppingBag } from '@mui/icons-material'
import { Box, Chip, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { orderItems } from '../../_mock/order'
import { Link, useNavigate } from 'react-router-dom'

const chipColor = { 
  'Delivered': 'green',
  'Transit': 'orange',
  'Shipped': '#ABDDE1',

}
const Order = () => {
  const orders = orderItems;
  const navigate = useNavigate()

  function handleOrderItemView(id) {
    navigate(`/app/orders/${id}`)
  }
  return (
    <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
      <Stack direction={"row"} gap={2} justifyContent={"flex-start"} alignContent={"center"}>
        <ShoppingBag sx={{ height: 25, width: 25 }} />
        <Typography variant='h5'>My Orders</Typography>
      </Stack>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        {orders.map((order) => (
          <Link to={`${order.id}`} style={{textDecoration: 'none'}}>
          <Paper >
            <Stack direction={"row"} justifyContent={"space-between"} sx={{ p: 3 }} alignItems={"center"}>
              <Box sx={{width: {xs:'20%',md:'40%'}}}>
                <Typography sx={{ fontWeight: 'bold' }}>{order.id}</Typography>
              </Box>
              <Box  sx={{width: {xs: '20%', md:'20%'}, justifyContent:"center", alignItems: 'center'}}>

                <Typography> <Chip label={order.status} sx={{background: chipColor[order.status], minWidth: {xs: 70,md: 100}}} size='small'/></Typography>
              </Box>

              <Box  sx={{width: '20%'}}>

                <Typography sx={{ fontSize: {xs:14,md:16}}}>{order.date}</Typography>
              </Box>

              <Box  sx={{width: {xs:'5%' ,md:'10%'}}}>

                <Typography>${order.totalAmount}</Typography>
              </Box>

              <Box  sx={{width:  {xs:'10%' ,md:'10%'}, display: 'flex', justifyContent:'flex-end' }}>

                <IconButton onClick={() => handleOrderItemView(order.id)}><ArrowForward /></IconButton>
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