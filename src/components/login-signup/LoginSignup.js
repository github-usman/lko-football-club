import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
const LoginSignup = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div
      style={{
        backgroundColor: '#F3675C',
        color: '#ffffff',
        height: '35.8rem',
      }}
    >
      <div style={{ padding: '4rem 4rem' }}>
        <h1 style={{ textDecoration: 'underline' }}>
          LOGIN<span style={{ fontSize: '40px' }}>/</span>SIGNUP
        </h1>
        <form style={{ marginTop: '2rem' }}>
          <div>
            <label htmlFor='email'>
              <h2>Email*</h2>
            </label>
            <input
              type='email'
              id='email'
              value={email}
              placeholder='Enter your email address'
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: '3.5rem',
                width: '100%',
                padding: '0 1rem',
                margin: '0.5rem 0 1rem 0',
                fontSize: '18px',
                color: '#F3675C',
              }}
            />
          </div>
          <div>
            <label htmlFor='password'>
              <h2>Password*</h2>
            </label>
            <input
              type='password'
              id='password'
              value={password}
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: '3.5rem',
                width: '100%',
                padding: '0 1rem',
                margin: '0.5rem 0 1rem 0',
                fontSize: '18px',
                color: '#F3675C',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <button
              type='button'
              style={{
                backgroundColor: '#B53118',
                color: '#ffffff',
                fontSize: '18px',
                padding: '0.5rem 3rem',
                width: '13rem',
                borderRadius: '1.5rem',
                border: 'none',
              }}
            >
              <h2>Continue</h2>
            </button>
            <p>Can't log in?</p>
            <div style={{ position: 'relative' }}>
              <p
                style={{
                  position: 'absolute',
                  backgroundColor: '#F3675C',
                  left: '50%',
                  top: '-10px',
                  zIndex: '100',
                  padding: '0 0.5rem',
                }}
              >
                Or
              </p>
              <hr style={{ width: '25rem', borderTop: '1px solid #ffffff' }} />
            </div>
            <button
              style={{
                padding: '0.5rem 5rem',
                borderRadius: '1.2rem',
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '20px',
                color: 'grey',
              }}
            >
              <FcGoogle size={40} />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup
