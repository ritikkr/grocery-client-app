import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CartReviewCard from './CartReviewCard'
import { items } from '../_mock/Item'
import { useNavigate } from 'react-router-dom'
import CartAddressForm from './CartAddressForm'
import BillingDetails from './BillingDetails'

const CartReview = () => {

    const [itemList, setItemList] = useState(items)
    const navigate = useNavigate()

    const handleRemove = (id) => {
            setItemList(itemList.filter((item) => item.id !== id))
    }

    const handleBrowseProduct = () => {
            navigate("/app")
    }

  return (
    <Box sx={{minHeight: '100vh', display: 'flex', gap:2, flexDirection: {xs:'column', md: 'row'} }}>
        <Stack gap={2} sx={{width: {xs: '100%',md:'60%'}}}>
        {itemList.map((item) => (
              <Paper >
            <CartReviewCard handleRemove={handleRemove} item={item}/>
            </Paper>
        ))}
        {itemList.length === 0 &&( 
            <>
            <Typography variant='h4'>Cart is Empty!!!!</Typography>
            <Button variant='contained' onClick={handleBrowseProduct}>Browse Products</Button>
            </>
            )}
        </Stack>
        <Stack sx={{width:  {xs: '100%',md:'60%'},}} gap={2}>
           <CartAddressForm />
           <BillingDetails />
        </Stack>
   

    </Box>
  )
}

export default CartReview