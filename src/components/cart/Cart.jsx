import { Box, Drawer } from '@mui/material'
import React, { useState } from 'react'

const Cart = ({open, onClose}) => {

  return (
    <Drawer
            anchor={'right'}
            open={open}
            onClose={() => onClose(false)}
          >
            <Box sx={{width: 380}}>
                    
            </Box>
          </Drawer>
  )
}

export default Cart