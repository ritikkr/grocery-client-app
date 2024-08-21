import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import onlineGrocery from "../../assets/onlineGrocery.svg"
import shoppingApp from "../../assets/shoppingBag.svg"


const Register = () => {
  const navigate = useNavigate()
  
  function handleNavigateLogin (){
    navigate('/login')
  }

  return (

    <Box>
        <Box sx={{height: '10%', display: 'flex', justifyContent: 'space-between', p:2, alignItems:'center',  }}>
           <Link to="/" style={{textDecoration: 'none', color: '#000'}}><Typography sx={{fontWeight: 'bold', fontSize: 20}}>Quick Shop</Typography></Link>
            <Button variant='contained' onClick={handleNavigateLogin}>Login</Button>

        </Box>
        <Divider />
        <Box sx={{display: 'flex', flexDirection: {xs:'column-reverse',md:'row-reverse'}, justifyContent: 'space-between', p:4, height: '90%'}}>
          
            <Box sx={{width: {xs:'100%',md:'100%'}, justifyContent:'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant='h4'> Register Yourself</Typography>
            
            <Stack sx={{flexDirection: {xs: "column", md:"row"}, width: {xs: '100%', md:'50%'}}}>
            <Stack sx={{width: {xs:'100%',md:'50%'}, p: 2}} gap={2} >
        
             <TextField id="outlined-basic" label="Full Name" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Phone Number" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Zip Code" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small' />

        </Stack>
        <Stack sx={{width:  {xs:'100%',md:'50%'}, p: 2}} gap={2} >
             <TextField id="outlined-basic" label="Email Address" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Company" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Country" variant="outlined" size='small' />
             <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small' />
        </Stack>
       
      
    </Stack>
    <Stack sx={{width:  {xs:'100%',md:'50%'}, p: 2}} gap={2} alignItems={"center"} >
        <Button variant='contained'  fullWidth sx={{ml:3}}>Register</Button>

          </Stack>
 
            </Box>
            <Box  sx={{width: {xs: '90%', md:'40%'}, display: {xs:'none', md: 'block'},  p:3, }}>
                  <img src={shoppingApp} style={{height: {xs: '80%', md:'80%'}, width: '100%'}}/>
            </Box>
        </Box>

    </Box>
  )
}

export default Register