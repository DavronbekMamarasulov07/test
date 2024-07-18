import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from '../routes/home/Home'
import SinglePage from '../routes/single-page/SinglePage'
import Auth from '../routes/auth/Auth'
import NotFound from '../routes/not-found/NotFound'
import Login from '../routes/auth/login/Login'
import Register from '../routes/auth/register/Register'
import Products from '../routes/products/Products'
import Category from './category/Category'

const RoudesController = () => {
  const token = localStorage.getItem('token')

  


  return (
    <Routes>
      <Route path='' element={<Home />} />
      
      <Route  path='single-page/:id' element={<SinglePage />} />

      <Route path='auth' element={<Auth />}>
        <Route path='register' element={<Register />} />
        <Route path='' element={<Navigate to='login' />} />
        <Route path='login' element={<Login />} />
      </Route>

      <Route path='products' element={ token ? <Products /> : <Navigate to='/auth' />}/>
        
      <Route path='category/:id' element={ token ? <Category /> : <Navigate to='/auth' />}/>

      <Route path='not-found' element={<NotFound />} />
      <Route path='*' element={<Navigate to='not-found' />} />
    </Routes>
  )
}

export default RoudesController
