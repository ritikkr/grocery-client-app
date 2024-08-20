import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const BillingDetails = () => {
  return (
<Paper>
<Stack p={2} gap={2}>
        <Stack direction={"row"} justifyContent={"space-between"} sx={{p:2}}>
            <Stack>
                <Typography variant='description'>Sub total</Typography>
                <Typography>Shipping</Typography>
                <Typography>Tax</Typography>
                <Typography>Discount</Typography>



            </Stack>
            <Stack textAlign={"center"}>
                <Typography>$3642</Typography>
                <Typography>-</Typography>
                <Typography>$53</Typography>
                <Typography>$28</Typography>

            </Stack>
        </Stack>
        <Divider />
        <Typography variant='h3'>$1413</Typography>
        <Button variant='contained'>Make ORder</Button>

    </Stack>
    </Paper>
  )
}

export default BillingDetails