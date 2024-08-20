import { Box, Drawer } from '@mui/material'
import React, { useState } from 'react'
import CartStepper from './CartStepper'
import CartReview from './CartReview'

const Cart = () => {

  return (
    <Box >
        {/* <CartStepper /> */}
        <CartReview />
    </Box>
  )
}

export default Cart