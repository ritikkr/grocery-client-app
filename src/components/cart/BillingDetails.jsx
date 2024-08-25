import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import MakeOrder from './MakeOrderDialog';

const BillingDetails = ({confirmTheOrder}) => {

  const [open, setOpen] = React.useState(false);

  const items = useSelector((state) => state.cart.items)
  
  const tax = 53;
  const discount = 28;

  function calculateTotal() {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleMakeOrder = () => {
    setOpen(true)
  }

  const handleConfirmOrder = () => {
    setOpen(false)
    confirmTheOrder()
  }

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
                <Typography>${calculateTotal()}</Typography>
                <Typography>-</Typography>
                <Typography>$53</Typography>
                <Typography>$28</Typography>

            </Stack>
        </Stack>
        <Divider />
        <Typography variant='h3'>${ new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
   calculateTotal() + tax - discount
  )}</Typography>
        <Button variant='contained' onClick={handleMakeOrder}>Make ORder</Button>
        {open && <MakeOrder open={open} handleClose={handleClose} handleConfirmOrder={handleConfirmOrder}/>}

    </Stack>
    </Paper>
  )
}

export default BillingDetails