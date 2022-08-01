import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@src/routes/Home'
import Signin from './routes/signin/Signin'
import Signup from './routes/signup/Signup'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
