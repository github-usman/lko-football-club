import React from 'react'

const Media = () => {
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
        <h3 className='Department-heading'>MEDIA</h3>
      </div>
      <div>
        <p
          style={{
            fontSize: '20px',
            fontFamily: 'sans-serif',
            padding: '1rem 1rem 2rem 1rem',
          }}
        >
          Newscenter | &nbsp; Social | &nbsp;Programme | &nbsp; Support | &nbsp;
          Fan Poll
        </p>
      </div>
    </div>
  )
}

export default Media
