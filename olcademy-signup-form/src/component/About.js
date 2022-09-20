import React, {useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  let history = useNavigate();
  useEffect(()=> {
    if(localStorage.getItem('auth-token')){
      console.log("You are signed in");
    }
    else{
      history("/signup");
     }
  })
  
  return (
    <div className='container my-3'>
      This is about page of Olcademy App
    </div>
  )
}

export default About
