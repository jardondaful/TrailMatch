import React from 'react'
import { useNavigate } from 'react-router';

const Header = () => {
    const handleClick = event => {
        window.location.reload();
    };
  return (
    <div style={{borderBottom :"black 1px solid"}}>
        <img className ="heading" src='trailmatch logo.png' onClick={handleClick}></img>
    </div>
  )
}

export default Header