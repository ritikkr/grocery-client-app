import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import onlineGrocery from "../../assets/onlineGrocery.svg"
import shoppingApp from "../../assets/shoppingBag.svg"


const Login = () => {
  const navigate = useNavigate()
  
  function handleNavigateRegister (){
    navigate('/register')
  }

  return (

    <Box>
        <Box sx={{height: '10%', display: 'flex', justifyContent: 'space-between', p:2, alignItems:'center',  }}>
           <Link to="/" style={{textDecoration: 'none', color: '#000'}}><Typography sx={{fontWeight: 'bold', fontSize: 20}}>Quick Shop</Typography></Link>
            <Button variant='contained' onClick={handleNavigateRegister}>Register</Button>

        </Box>
        <Divider />
        <Box sx={{display: 'flex', flexDirection: {xs:'column-reverse',md:'row-reverse'}, justifyContent: 'space-between', p:4, height: '90%'}}>
          
            <Box sx={{width: {xs:'100%',md:'100%'}, justifyContent:'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 2}}>
            <Stack sx={{flexDirection: {xs: "column", md:"row"},}}>
        <Stack sx={{ p: 2,}} gap={2} justifyContent={"center"} >
            <Typography variant='h4'>Login to know the latest deals!!!!!</Typography>
             <TextField id="outlined-basic" label="Email" variant="outlined" size='small' />
            
             <TextField id="outlined-basic" label="Password" variant="outlined" size='small' type='password' />
             <Button variant='contained'>Login</Button>



        </Stack>

    </Stack>
    
            </Box>
            <Box  sx={{width: {xs: '90%', md:'40%'}, display: {xs:'none', md: 'block'},  p:3, }}>
                  <img src={shoppingApp} style={{height: {xs: '80%', md:'80%'}, width: '100%'}}/>
            </Box>
        </Box>

    </Box>
  )
}

export default Login