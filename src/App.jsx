import React, { useEffect } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { refreshToken, resetState } from './features/user/userSlice';
import { jwtDecode } from 'jwt-decode';
import {toast} from 'react-toastify';

import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    const refresh = async () => {
      if (userState) {
        try {
          await dispatch(refreshToken(userState?.refreshToken));
        } catch (err) {
          toast.error('Failed to refresh token!');
        }
      }
    };
    refresh();
  }, [userState, dispatch]);

  const handleDecoded = () => {
    let storageData = userState?.token || (JSON.parse(localStorage.getItem('customer')))?.token;
    let decoded = {};
    let refreshToken = "";
    let decodedRefreshToken = {};
    if (storageData) {
      decoded = jwtDecode(storageData)
      refreshToken = userState?.refreshToken || (JSON.parse(localStorage.getItem('customer')))?.refreshToken;
      decodedRefreshToken = jwtDecode(refreshToken)
    }
    return { decoded, storageData, decodedRefreshToken, refreshToken }
  }
  axios.interceptors.request.use(async (config) => {
    // Do something before request is sent HTTP
    const currentTime = new Date()
    const { decoded, storageData, decodedRefreshToken, refreshToken } = handleDecoded()

    if (decoded?.exp < currentTime.getTime() / 1000) {
      if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
        const data = refreshToken;
        config.headers['Authorization'] = `Bearer ${data}`
        // console.log("refreshToken Successfully");
      } else {
        toast.warning("Your login session has expired, please log in again to continue using!");
        localStorage.clear();
        window.location.reload();
      }
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App