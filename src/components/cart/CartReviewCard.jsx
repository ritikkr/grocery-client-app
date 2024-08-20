import { Add, Cancel, Clear, Remove } from '@mui/icons-material'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const CartReviewCard = ({item, handleRemove}) => {
    const [itemCount, setItemCount] = useState(1)
  return (
  
    <Box sx={{display: 'flex', height: 180,  p:{md:2, xs:1}, gap:2, position: 'relative'}}>
        <Box sx={{width: {xs: '100%', md:'20%'} }}>
            <img src={item.imgLink} style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
        </Box>
        <Box sx={{width: {xs: '30%',md:'70%'}}}>
            <Stack gap={2}>
                <Typography sx={{fontSize: 16, fontWeight: 'bold'}} >{item.name}</Typography>
                <Stack direction={"row"} gap={2}>
                <Typography>${item.price} x 2</Typography>
                <Typography sx={{color: "red"}}>$420</Typography>
                </Stack>
                <Stack direction={"row"} sx={{gap:{xs:1, md:2}}} alignItems={"center"}>
                    <IconButton sx={{ border: itemCount >1 ? '1px solid red': '1px solid gray', borderRadius: 2,  height: {xs:25, md: 40}, width: {xs:25, md: 40} }} size='small' onClick={() => setItemCount((prev) => prev - 1)} disabled={itemCount < 2}>
                        <Remove sx={{ color: itemCount >1 ?  "red": "gray" }} />
                    </IconButton>
                 <Typography sx={{fontWeight: 'bold'}}>{itemCount}</Typography>
                   <IconButton sx={{ border: '1px solid red', borderRadius: 2, height: {xs:25, md: 40}, width: {xs:25, md: 40} }} size='small' onClick={() => setItemCount((prev) => prev + 1)}>
                        <Add sx={{ color: "red" }} />
                    </IconButton>
                </Stack> 

            </Stack>
        </Box>
        <Box sx={{width: '10%',}}>
            <IconButton sx={{ right:0, position: 'absolute', top: 2, }} onClick={() => handleRemove(item.id)}>
            <Clear sx={{color: "#000"}} />

            </IconButton>
        </Box>
    </Box>
  )
}

export default CartReviewCard