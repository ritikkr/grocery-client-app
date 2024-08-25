import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CartReviewCard from './CartReviewCard'
import { useNavigate } from 'react-router-dom'
import CartAddressForm from './CartAddressForm'
import BillingDetails from './BillingDetails'
import { useSelector, useDispatch } from 'react-redux'
import { addOrderItem, removeOrderItem, updateOrderQuantiy } from '../../features/CartSlice'
import AlertSnackBar from "../utils/AlertSnackBar"
import { items } from '../_mock/Item'
import { useAuth } from '../hooks/useProvideAuth'
import axios from 'axios'

const CartReview = () => {

    const cartItems = useSelector((state) => state.cart.items)
    const {user} = useAuth()
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [addressNotFilled, setAddressNotFilled] = useState(false)
    const [address, setAddress] = useState({
      addressLine1: '',
      addressLine2: '',
      zipcode: '',
      city: '',
      state: ''
    })

    const handleRemove = (id) => {
            dispatch(removeOrderItem({id: id}))
    }

    const handleBrowseProduct = () => {
            navigate("/app",)
    }

    function checkForObjectContainsEmptyValues (obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          // Check if the value is not null, undefined, or an empty string
       
          if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
            return true;
          }
        }
      }
      return false;
    }

   const confirmTheOrder = () => {
    console.log(address);
    

    const hasEmptyValues = checkForObjectContainsEmptyValues(address);
    console.log(hasEmptyValues);
    
    if(hasEmptyValues){
        alert("Address not filled properly")
    }
    else{
        completeOrder()
    }
    
   }

   function completeOrder(){
    console.log(user);
    const itemsWithoutPrice = cartItems.map(item => {
      const { price, ...rest } = item; // Destructure item, excluding price
      return rest; // Return the remaining properties
    })
    
    
      const order = {
       userId: user.id,
       shippingAddress: address,
       orderItems:itemsWithoutPrice,
       paymentMethod: 'CREDIT/DEBIT CARD'

      }

      axios.post("/api/order", order, {
        headers: {
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
        }
      })
      .then((res) => {
        navigate("/app",  {state: {from: 'completedOrder'}})
        
      })
      
   }

 


   

  return (
    <Box sx={{minHeight: '100vh', display: 'flex', gap:2, flexDirection: {xs:'column', md: 'row'} }}>
        <Stack gap={2} sx={{width: {xs: '100%',md:'60%'}}} >
        {cartItems.map((item) => (
              <Paper >
            <CartReviewCard handleRemove={handleRemove} item={item}/>
            </Paper>
        ))}
          {cartItems.length !== 0 &&( 
            <>
            <Button variant='contained' onClick={handleBrowseProduct}>Add More Products</Button>
            </>
            )}
        {cartItems.length === 0 &&( 
            <>
            <Typography variant='h4'>Cart is Empty!!!!</Typography>
            <Button variant='contained' onClick={handleBrowseProduct}>Browse Products</Button>
            </>
            )}
        </Stack>
       {cartItems.length > 0 &&  <Stack sx={{width:  {xs: '100%',md:'60%'},}} gap={2}>
           <CartAddressForm  address={address} setAddress={setAddress}/>
           {checkForObjectContainsEmptyValues(address)  &&  <p>Filled the Address properly</p>}

           <BillingDetails confirmTheOrder={confirmTheOrder}/>
        </Stack>}
   

    </Box>
  )
}

export default CartReview