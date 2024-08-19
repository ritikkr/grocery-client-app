import React from 'react'
import Offer from './Offer'
import { Box, Button, Typography } from '@mui/material'
import ItemCard from '../cards/ItemCard'
import { items } from '../../_mock/Item'



const MainLanding = () => {

  return (
    <Box>
        <Offer />
        <Box sx={{ mt:2}}>
          <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center",}}>
            <Typography variant='h5'>Best Products</Typography>
            <Button>View All ▶</Button>
          </Box>
          <Box sx={{display: "flex", overflow: "hidden", width: '100%', mb: 2, flexWrap: 'wrap', justifyContent: "space-between", gap:2}}>
            {items.map((item) => (
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
            {items.map((item) => (
              <ItemCard key={item.name} item={item}/>
            ))}
           
          </Box>

        </Box>
        
       
        
    </Box>
  )
}

export default MainLanding