import React from 'react'
import Dropdown from './Dropdown'

const gender = ['Women', 'Men', 'Third Gender']
const physicalAbility = [
  'Abled',
  'Differently Abled',
  'Specially Abled',
  'Retired',
]
const category = ['Football', 'Fustal']
const ageGroup = [
  'Amateur (Under - 5)',
  'Amateur (Under - 7)',
  'Amateur (Under - 9)',
  'Amateur (Under - 11)',
  'Amateur (Under - 13)',
  'Amateur (Under - 15)',
  'Amateur (Under - 17)',
  'Amateur (Under - 19)',
  'Amateur (Under - 21)',
  'Amateur (Open)',
]
const DropDownMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2rem 0',
        fontSize: '14px',
      }}
    >
      <div>
        <p style={{ marginBottom: '.5rem' }}>GENDER</p>
        <Dropdown
          options={gender}
          dropSize={'11rem'}
          selectText={'Select Gender'}
        />
      </div>
      <div>
        <p style={{ marginBottom: '.5rem' }}>PHYSICAL ABILITY</p>
        <Dropdown
          options={physicalAbility}
          dropSize={'15rem'}
          selectText={'SELECT PHYSICAL ABILITY'}
        />
      </div>
      <div>
        <p style={{ marginBottom: '.5rem' }}>CATEGORY</p>
        <Dropdown
          options={category}
          dropSize={'11rem'}
          selectText={'SELECT CATEGORY'}
        />
      </div>
      <div>
        <p style={{ marginBottom: '.5rem' }}>AGE GROUP</p>
        <Dropdown
          options={ageGroup}
          dropSize={'13rem'}
          selectText={'SELECT AGE GROUP'}
        />
      </div>
    </div>
  )
}

export default DropDownMenu
