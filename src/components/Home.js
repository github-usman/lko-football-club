import React from 'react'
import home_poster from "../assets/home-poster.png"
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{position:'relative'}} >
        <img src={home_poster} alt='Home Photos Home Poster Football' style={{width:'100%',height:'inherit',borderRadius:'5px'}}/>
        <Outlet/>
    </div>
  )
}

export default Home