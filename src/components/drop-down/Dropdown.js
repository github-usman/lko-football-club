import React, { useState } from 'react'
import './dropwon-style.css'
import { IoIosArrowDown } from 'react-icons/io'

const Dropdown = ({ options, dropSize, selectText }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  console.log(options, 'options')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div>
      <div
        className={`dropdown ${isOpen ? 'open' : ''}`}
        style={{ width: dropSize }}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className='dropdown-header'
          onClick={toggleDropdown}
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <span style={{ color: selectedOption ? 'black' : 'grey' }}>
            {selectedOption || selectText}
          </span>
          <span className={`arrow ${isOpen ? 'rotate' : ''}`}>
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen && (
          <ul className='dropdown-list'>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
