import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { items } from '../../_mock/Item';
import { Box, Button, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addOrderItem, removeOrderItem, updateOrderQuantiy, } from '../../../features/CartSlice';



const SearchItemCard = ({product}) => {
    const items = useSelector((state) => state.cart.items)
    const cartItem = items.filter((item) => item.productId === product.productId)
   
    const [itemCount, setItemCount] = React.useState(cartItem[0] !== undefined ? cartItem[0].quantity : 0 );

    const dispatch = useDispatch()

    const handleAddItemClick = () => {
        if(itemCount ===0){
            dispatch(addOrderItem({id: product.productId,  }))

        }
        else{
        dispatch(updateOrderQuantiy({id: product.productId, quantity: itemCount+1, }))

        }
        setItemCount((prev) => prev+1)
       
    }

    const handleRemoveItemClick = () => {
        if(itemCount-1 ===0){
            dispatch(removeOrderItem({id: product.productId}))

        }
        else{
        dispatch(updateOrderQuantiy({id: product.productId, quantity: itemCount-1, }))

        }
        setItemCount((prev) => prev-1)
       
    }

    console.log("items",items);
    
    return (
       
        <Box sx={{ display: 'flex', p: 2, height: 300, width: '70%', justifyContent: 'flex-end', mb:2}}>
            <Box sx={{ width: '50%',  }}>
             <Link to={`/app/products/${product.productId}`} style={{textDecoration: 'none', color: '#000'}}>
                <img src={product.imageUrl} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            </Link>
            </Box>
            <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column', width:'50%', justifyContent:'center', p:2 }}>
                <Typography variant='h6'> {product.name}</Typography>
                <Stack direction={"row"}>
                    <Typography >Brand: </Typography>
                    <Typography sx={{ fontWeight: 'bold', }}>{product.brand}</Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography >Rating: </Typography>
                    <Rating
                        name="simple-controlled"
                        value={product.rating}
                        // onChange={(event, newValue) => {
                        //     setRatingValue(newValue);
                        // }}
                        readOnly
                    />
                    <Typography sx={{ fontWeight: 'bold', }}>({product.rating})</Typography>


                </Stack>
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>${product.price}</Typography>
                {itemCount == 0 && <Button variant='contained' size='small' sx={{height:40, width:150}} onClick={handleAddItemClick}>Add to Cart</Button>}
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                    {itemCount > 0 && <IconButton sx={{ border: '1px solid red', borderRadius: 2 }} size='small' onClick={handleRemoveItemClick}>
                        <Remove sx={{ color: "red" }} />
                    </IconButton>}
                   {itemCount > 0 &&  <Typography>{itemCount}</Typography>}
                    {itemCount > 0 && <IconButton sx={{ border: '1px solid red', borderRadius: 2 }} size='small' onClick={handleAddItemClick}>
                        <Add sx={{ color: "red" }} />
                    </IconButton>}
                </Stack>
                <Divider sx={{display: {xs:'none', md: 'block'}}}/>
                <Typography  sx={{display: {xs:'none', md: 'block'}}}    >
                   {product.description}
                </Typography>
            </Box>

        </Box>
    )
}

export default SearchItemCard