import React, { useState } from 'react'
import './App.css'
import NavBar from './components/top_menu/NavBar'
import HeroPage from './components/top_menu/HeroPage'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/material'
import CustomThemeProvider from './themes/CustomThemeProvider'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/home/Login'
import Register from './components/home/Register'
import Dashboard from './components/dashboard/Dashboard'
import Order from './components/dashboard/order/Order'
import MainLanding from './components/dashboard/landingPage/MainLanding'
import Product from './components/dashboard/product/Product';
import SearchResults from './components/dashboard/search/SearchResults';
import Cart from './components/cart/Cart';
function App() {
  const [value, setValue] = React.useState(0);

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/app' element={<Dashboard />}>
            <Route index element={<MainLanding />} />
            <Route path='products/:productId' element={<Product />} />
            <Route path='order' element={<Order />} />
            <Route path="search/:query" element={<SearchResults />} />
            <Route path="cart" element={<Cart />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  )
}

export default App
