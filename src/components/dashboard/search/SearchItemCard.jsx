import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../../_mock/Item';
import { Box, Button, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';



const SearchItemCard = ({product}) => {
   
    const [itemCount, setItemCount] = useState(0)


    return (
        <Box sx={{ display: 'flex', p: 2, height: 300, width: '70%', justifyContent: 'flex-end', mb:2}}>
            <Box sx={{ width: '50%',  }}>
                <img src={product.imgLink} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                {itemCount == 0 && <Button variant='contained' size='small' sx={{height:40, width:150}} onClick={() => setItemCount(1)}>Add to Cart</Button>}
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                    {itemCount > 0 && <IconButton sx={{ border: '1px solid red', borderRadius: 2 }} size='small' onClick={() => setItemCount((prev) => prev - 1)}>
                        <Remove sx={{ color: "red" }} />
                    </IconButton>}
                   {itemCount > 0 &&  <Typography>{itemCount}</Typography>}
                    {itemCount > 0 && <IconButton sx={{ border: '1px solid red', borderRadius: 2 }} size='small' onClick={() => setItemCount((prev) => prev + 1)}>
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