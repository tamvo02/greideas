import React, { useCallback } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import IdeaDetailPage from './pages/IdeaDetailPage';
import IdeasPage from './pages/IdeasPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import User from './pages/User';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminPage from './pages/AdminPage';
import checkToken from './service/checkToken';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const decodedToken = checkToken() ;
    console.log(navigate.toString)
    if (decodedToken) {
      setUserRole(decodedToken.roleId);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [navigate,isLoggedIn]);

  // const userInfo = isLoggedIn ? jwt_decode(localStorage.getItem('token')) : null;

  return (
        <Routes>
          {userRole === 2 || userRole === 3 ? (<Route path="/" element={<AdminPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />) : 
          ( <><Route path="/" index element={<LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></LandingPage>}></Route>
          <Route path="/topics/:id" element={<IdeasPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></IdeasPage>}></Route>
          <Route path="/user" element={<User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></User>}></Route>
          <Route path="/ideas/:id" element={(<IdeaDetailPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></IdeaDetailPage>)}></Route></>)}
          <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></LoginPage>}></Route>
       </Routes>
  );
}
export default App
