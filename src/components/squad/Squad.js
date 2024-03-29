import React from 'react'
import { NavLink } from 'react-router-dom'

const Squad = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        width: '99.8%',
        left: '50%',
        transform: 'translate(-50%)',
        backgroundColor: '#FBEAE3',
        border: '1px solid #f99b70',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '20rem',
          height: '100%',
        }}
      >
        <NavLink to={'/team'} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              color: '#F24423',
              backgroundColor: '#FEF2EE',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: '1px solid #F24423',
              borderBottom: '1px solid #F24423',
              margin: '5px',
              textAlign: 'start',
              padding: '0.8rem 1rem',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            TEAM
          </h3>
        </NavLink>
        <NavLink to={'/academy'} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              color: '#F24423',
              backgroundColor: '#FEF2EE',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: '1px solid #F24423',
              borderBottom: '1px solid #F24423',
              margin: '0 5px',
              textAlign: 'start',
              padding: '0.8rem 1rem',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            ACADEMY
          </h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Squad
