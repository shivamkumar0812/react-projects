import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
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
      <h2 className='text-center'>Welcome to Olcademy App</h2>
    </div>
  )
     
     
}



export default Home
