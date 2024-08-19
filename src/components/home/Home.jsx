import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  
  function handleNavigateApp (){
    navigate('app')
  }

  return (

    <div>
      Home
    <button onClick={handleNavigateApp}>App </button>

    </div>
  )
}

export default Home