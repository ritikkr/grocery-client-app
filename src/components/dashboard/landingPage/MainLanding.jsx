import React, { useEffect, useState } from 'react'
import Offer from './Offer'
import { Box, Button, Typography } from '@mui/material'
import ItemCard from '../cards/ItemCard'
import { items } from '../../_mock/Item'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import AlertSnackBar from '../../utils/AlertSnackBar'



const MainLanding = () => {

  const [bestProducts, setBestProducts] = useState([])
  const [trendingProducts, setTrendingProducts] = useState([])
  const location = useLocation();
  const [orderConfirmation, setOrderConfirmation] = useState(false)
 
  console.log(location);
  

  // Check if the user was redirected from another component/URL
  if (location.state?.from) {
    console.log('User was redirected from:', location.state.from);
  }

 

  useEffect(() => {

    if (location.state?.from === "completedOrder") {
     setOrderConfirmation(true)
    }
  

      axios.get("/api/product/random",{
        headers: {
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
        }
      })
      .then((res) => {
        setBestProducts(res.data)
      })

      axios.get("/api/product/random",{
        headers: {
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
        }
      })
      .then((res) => {
        setTrendingProducts(res.data)
      })
  },[])

  return (
    <Box>
        <Offer />
        <Box sx={{ mt:2}}>
          <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center",}}>
            <Typography variant='h5'>Best Products</Typography>
            <Button>View All ▶</Button>
          </Box>
          <Box sx={{display: "flex", overflow: "hidden", width: '100%', mb: 2, flexWrap: 'wrap', justifyContent: "space-between", gap:2}}>
            {bestProducts.slice(0,5).map((item) => (
              <ItemCard key={item.name} item={item}/>
            ))}
           
          </Box>

        </Box>
        <Box sx={{ mt:2}}>
          <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center",}}>
            <Typography variant='h5'>Trending Products</Typography>
            <Button>View All ▶</Button>
          </Box>
          <Box sx={{display: "flex", overflow: "hidden", width: '100%', mb: 2, flexWrap: 'wrap', justifyContent: "space-between", gap:2}}>
            {trendingProducts.slice(0, 10).map((item) => (
              <ItemCard key={item.name} item={item}/>
            ))}
           
          </Box>
          {orderConfirmation && <AlertSnackBar message={"Your order is confirmed"} severity={'success'}/>}

        </Box>
        
       
        
    </Box>
  )
}

export default MainLanding