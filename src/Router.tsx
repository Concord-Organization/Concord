import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@src/routes/home/Home'
import Signin from './routes/signin/Signin'
import Signup from './routes/signup/Signup'
import Friend from './routes/home/Friend'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id/*" element={<Friend />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<span>존재하지 않는 페이지입니다.</span>} />
      </Routes>
    </BrowserRouter>
  )
}
