import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import onlineGrocery from "../../assets/onlineGrocery.svg"
import shoppingApp from "../../assets/shoppingBag.svg"


const Home = () => {
  const navigate = useNavigate()
  
  function handleNavigateLogin (){
    navigate('login')
  }

  return (

    <Box>
        <Box sx={{height: '10%', display: 'flex', justifyContent: 'space-between', p:2, alignItems:'center',  }}>
            <Typography sx={{fontWeight: 'bold', fontSize: 20}}>Quick Shop</Typography>
            <Button variant='contained' onClick={handleNavigateLogin}>Get Started</Button>

        </Box>
        <Divider />
        <Box sx={{display: 'flex', flexDirection: {xs:'column-reverse',md:'row'}, justifyContent: 'space-between', p:2, height: '90%'}}>
          
            <Box sx={{width: {xs:'100%', md:'60%'}, p:3, justifyContent:'center', alignContent: 'center', display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography  sx={{fontWeight: 300, fontSize: {xs: '2.2rem', md:'3.75rem'}, letterHeight: '1.2' }}>Discover Daily Deals and Exclusive Offers.</Typography>
                <Typography variant='h5' >Shop from Anywhere, Anytime.</Typography>
                 <Button variant='contained' sx={{height: 50, width: 200}}  onClick={handleNavigateLogin}>Get Started</Button>
                 <Button variant='contained' sx={{height: 50, width: 200}}  onClick={() => navigate('/app')}>Go to App</Button>


            </Box>
            <Box  sx={{width: {xs: '90%', md:'40%'}, p:3, }}>
                  <img src={shoppingApp} style={{height: {xs: '80%', md:'80%'}, width: '100%'}}/>
            </Box>
        </Box>

    </Box>
  )
}

export default Home