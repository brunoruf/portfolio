import React from 'react'
import './style.css';

const Button = ({text, icon}) => {
  return (
    <button>
      <span>{text}</span>
      <span className='icon'>{icon}</span>
      </button>
  )
}

export default Button