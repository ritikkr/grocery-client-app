import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../../_mock/Item';
import { Box, Button, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import ProductCard from './ProductCard';
import ItemCard from '../cards/ItemCard';



const Product = () => {
  


    return (
        <Box >
          <ProductCard />
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: "center",}}>
            <Typography variant='h5'>Best Products</Typography>
            <Button>View All ▶</Button>
          </Stack>
          <Box sx={{display: "flex", overflow: "hidden", width: '100%', mb: 2, flexWrap: 'wrap', justifyContent: "space-between", gap:2}}>
            {items.map((item) => (
              <ItemCard key={item.name} item={item}/>
            ))}
           
          </Box>

        </Box>
    )
}

export default Product