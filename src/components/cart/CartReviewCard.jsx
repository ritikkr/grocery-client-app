import { Add, Cancel, Clear, Remove } from '@mui/icons-material'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderItem, removeOrderItem, updateOrderQuantiy } from '../../features/CartSlice'

const CartReviewCard = ({item, handleRemove}) => {
    const [itemCount, setItemCount] = useState(item?.quantity)
    const [product, setProduct] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
            axios.get(`/api/product/${item.productId}`, {
                headers: {
                  Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
                }
              })
              .then((res) => {
                setProduct(res.data)
              })
    }, [])


    const handleAddItemClick = () => {
        if(itemCount ===0){
            dispatch(addOrderItem({id: item.productId,  price: product?.price}))

        }
        else{
        dispatch(updateOrderQuantiy({id: item.productId, quantity: itemCount+1}))

        }
        setItemCount((prev) => prev+1)
       
    }

    const handleRemoveItemClick = () => {
        if(itemCount-1 ===0){
            dispatch(removeOrderItem({id: item.productId}))

        }
        else{
        dispatch(updateOrderQuantiy({id: item.productId, quantity: itemCount-1}))

        }
        setItemCount((prev) => prev-1)
       
    }


    
  return (
  
    <Box sx={{display: 'flex', height: 180,  p:{md:2, xs:1}, gap:2, position: 'relative'}}>
        <Box sx={{width: {xs: '100%', md:'20%'} }}>
            <img src={product?.imageUrl} style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
        </Box>
        <Box sx={{width: {xs: '30%',md:'70%'}}}>
            <Stack gap={2}>
                <Typography sx={{fontSize: 16, fontWeight: 'bold'}} >{product?.name}</Typography>
                <Stack direction={"row"} gap={2}>
                <Typography>${product?.price} x {item.quantity}</Typography>
                <Typography sx={{color: "red"}}>{product?.price * item?.quantity}</Typography>
                </Stack>
                <Stack direction={"row"} sx={{gap:{xs:1, md:2}}} alignItems={"center"}>
                    <IconButton sx={{ border: itemCount >1 ? '1px solid red': '1px solid gray', borderRadius: 2,  height: {xs:25, md: 40}, width: {xs:25, md: 40} }} size='small' onClick={handleRemoveItemClick} disabled={itemCount < 2}>
                        <Remove sx={{ color: itemCount >1 ?  "red": "gray" }} />
                    </IconButton>
                 <Typography sx={{fontWeight: 'bold'}}>{itemCount}</Typography>
                   <IconButton sx={{ border: '1px solid red', borderRadius: 2, height: {xs:25, md: 40}, width: {xs:25, md: 40} }} size='small' onClick={handleAddItemClick}>
                        <Add sx={{ color: "red" }} />
                    </IconButton>
                </Stack> 

            </Stack>
        </Box>
        <Box sx={{width: '10%',}}>
            <IconButton sx={{ right:0, position: 'absolute', top: 2, }} onClick={() => handleRemove(item.productId)}>
            <Clear sx={{color: "#000"}} />

            </IconButton>
        </Box>
    </Box>
  )
}

export default CartReviewCard