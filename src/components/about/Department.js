import React from 'react'

const Department = () => {
  return (
    <div style={{ position: 'absolute', top: '115%', width: '99.8%', left: '50%', transform: 'translate(-50%)', backgroundColor: '#FBEAE3', border: '1px solid #f99b70' }} >
        <div style={{ display: 'flex', flexDirection: 'column', width: '15rem', height: '100%' }}>
            <h3 className='Department-heading'>DEPARTMENT</h3>
        </div>
        <div>
          <p style={{fontSize:'20px',fontFamily:'sans-serif',padding:'0.8rem 1rem'}}>Media & Parterners | &nbsp; Technical |  &nbsp;Grievance |  &nbsp;Social</p>
        </div>
    </div>
  )
}

export default Department