import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../../_mock/Item';
import { Box, Button, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import ProductItemCard from './ProductItemCard';



const ProductCard = () => {
    const { productId } = useParams();
    const product = items.filter((item) => item.id == productId)[0]

    const [itemCount, setItemCount] = useState(0)


    return (
        <Box>
            <ProductItemCard product={product} />

        </Box>
    )
}

export default ProductCard