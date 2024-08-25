import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../../_mock/Item';
import { Box, Button, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import ProductItemCard from './ProductItemCard';
import axios from 'axios';



const ProductCard = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([])

    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {       
        axios.get(`/api/product/${productId}`, {
            headers: {
              Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
            }
          }).then((res) => {
           
            setProduct(res.data)
            
          })
    }, [productId])


    return (
        <Box>
            <ProductItemCard product={product} />

        </Box>
    )
}

export default ProductCard