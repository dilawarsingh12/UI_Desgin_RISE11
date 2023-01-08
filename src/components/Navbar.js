import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import '../css/Navbar.css'
import img3 from '../images/america.png'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
    let h=50;
    let w=35;
  return (
    <Nav className='nav'>
      <div className="logo">
        <img alt="" src={img3} height={h} width={w} ></img>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
