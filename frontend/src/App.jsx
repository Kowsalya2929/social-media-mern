import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage.jsx';
import HomePage from './pages/HomePage.jsx';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/forgetpass' element={<ForgetPasswordPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App