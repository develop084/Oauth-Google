import { useState, useEffect } from 'react'

import './App.css'
import { GoogleLogin } from 'react-google-login';

import {gapi} from 'gapi-script'; 

function App() {
const clientid = "your client id here"
  
  useEffect(()=>{
 gapi.load("client:auth2",()=>{
  gapi.auth2.init({clientId: clientid })
 })
},[])


  const responseGoogle = (response) => {
    // Handle the response from Google after successful authentication
    console.log(response);
    
  };


  return (
    <>
    <GoogleLogin
      clientId={clientid}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
   
    </>
  )
}

export default App
