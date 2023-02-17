import React, { useState } from 'react';
import './Header.css';

const Header = ({ city, clickHandler, changeHandler, changeHandler2 }) => {

  const [header, setHeader] = useState();

  return (
    <div className='container'>
        <h1 style={{marginLeft: "20px", color: "gray"}}>Prayer Times in {city.charAt(0).toUpperCase() + city.slice(1)}</h1>
        <div className='container2'>
        <input placeholder='Country' onChange={ changeHandler } required/>
        <input placeholder='City' onChange={ changeHandler2 } required/>
        <button onClick={ clickHandler }>Enter</button>
        </div>
    </div>
  )
}

export default Header