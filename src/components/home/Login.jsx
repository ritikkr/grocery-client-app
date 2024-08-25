import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import onlineGrocery from "../../assets/onlineGrocery.svg"
import shoppingApp from "../../assets/shoppingBag.svg"
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useProvideAuth'
import AlertSnackBar from '../utils/AlertSnackBar'


const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [alertOpen, setAlert] = useState(false)
  

  const {isError, user, login, isLoading, error} = useAuth()


  function handleNavigateRegister() {
    navigate('/register')
  }

  const onSubmit = (data) => {
      login(data)
      console.log(error)
  };

  useEffect(() => {
    console.log("sur", user);
    
    if(user){
      navigate('/app')
    }
  },[user])

  return (
    
    <Box>
      {isError && error?.message && !isLoading && <AlertSnackBar message={error.message} severity={"error"} />}
      {user && !isError && !isLoading && <AlertSnackBar message={"Login Success"} severity={"success"}/>}

      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center', }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}><Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Quick Shop</Typography></Link>
        <Button variant='contained' onClick={handleNavigateRegister}>Register</Button>

      </Box>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row-reverse' }, justifyContent: 'space-between', p: 4, height: '90%' }}>
       
          <Box sx={{ width: { xs: '100%', md: '100%' }, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Stack sx={{ flexDirection: { xs: "column", md: "row" }, }}>
              <Stack sx={{ p: 2, }} gap={2} justifyContent={"center"} >
                <Typography variant='h4'>Login to know the latest deals!!!!!</Typography>
                <TextField label="Email" variant="outlined" size='small'  {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })}
                error={errors?.email}
               value={"admin@email.com"}
                />
               
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg" >Email is not valid.</p>
                )}
                <TextField label="Password"  variant="outlined" size='small' type='password'   {...register("password", {
                  required: true,
                  minLength: 6
                })} 
                error={errors?.password}
                value={"admin123"}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg">Password is required.</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="errorMsg">
                    Password should be at-least 6 characters.
                  </p>
                )}
                <Button variant='contained' type='submit'>Login</Button>



              </Stack>

            </Stack>

          </Box>
      
        <Box sx={{ width: { xs: '90%', md: '40%' }, display: { xs: 'none', md: 'block' }, p: 3, }}>
          <img src={onlineGrocery} style={{ height: { xs: '80%', md: '80%' }, width: '100%' }} />
        </Box>
      </Box>
      </form>
    </Box>
  )
}

export default Login