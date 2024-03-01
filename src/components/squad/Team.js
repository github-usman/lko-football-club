import React from 'react'
import DropDownMenus from '../drop-down/DropDownMenu'

const Team = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '115%',
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
          width: '15rem',
          height: '100%',
        }}
      >
        <h3 className='Department-heading'>TEAM</h3>
      </div>
      <DropDownMenus />
    </div>
  )
}

export default Team
