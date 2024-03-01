import React, { useState } from 'react'
import home_poster from '../assets/home-poster.png'
import { Outlet } from 'react-router-dom'
import LoginSignup from '../components/login-signup/LoginSignup'

const Home = ({ isModalOpen }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={home_poster}
        alt='Home Photos Home Poster Football'
        style={{
          filter: isModalOpen === true ? 'blur(8px)' : '',
          width: '100%',
          height: '35.8rem',
          borderRadius: '5px',
          marginBottom: '8rem',
        }}
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            transform: 'background-color 1.5s ease-out',
          }}
        >
          <LoginSignup />
        </div>
      )}

      <Outlet />
    </div>
  )
}

export default Home
