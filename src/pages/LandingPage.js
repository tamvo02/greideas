import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import ListTopics from '../components/ListTopics'
import Navigation from '../components/Navigation'


const LandingPage = ({isLoggedIn, setIsLoggedIn }) => {
 return (
    <>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navigation>
      <ListTopics isLoggedIn={isLoggedIn}></ListTopics>
    </>
  )}

export default LandingPage