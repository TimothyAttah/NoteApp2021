import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { NavbarData } from '../helpers';
import { colors } from '../themes/globalStyles';


const Ul = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    font-size: 16px; 
  }
  a {
    display: flex;
    align-items: center;
    color: ${colors.white};
    height: 60px;
    :hover{
      color: ${colors.lightBlue};
      border-bottom: 2px solid ${colors.lightBlue};
    }
  }
  @media(max-width: 980px){
    display: none;
  }
`

const cName = {
  color: `${colors.lightBlue}`,
  borderBottom: `2px solid ${colors.lightBlue}`
}

const Nav = () => {
 return (
    <>
    <Ul>
         {NavbarData.map((navbar, index) => {
           return (
             <li key={ index } >
               <NavLink to={ navbar.path } exact activeStyle={ cName }>
                 <span>{ navbar.icon }</span><span>{ navbar.title }</span>
               </NavLink>
             </li>
           )
         })}
    </Ul>
    </>
  )
}

export default Nav
