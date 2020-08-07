import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../images/imageFiles/logo.png';



export default function Header() {
    return (
        <header style={headerStyle}>
           <img src={logo} alt={logo} style={logostyle} />
            <Link style={linkStyle} to="/">Home</Link>|  
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration : 'none',
    padding: '3px'
}

const headerStyle = {
    background : '#000',
    color: '#fff',
    textAlign: 'center',
    padding : '10px'
}
const logostyle ={
    display: 'block',
    height: '60px',
    margin: '10px auto'

}