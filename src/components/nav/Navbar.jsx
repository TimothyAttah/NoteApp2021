import React, {useState} from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from '@material-ui/core';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import Nav from './Nav';
import { colors } from '../themes/globalStyles';
import { NavbarData } from '../helpers';


const NavWrapper = styled.div`
 width: 100%;
 display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 980px){
   justify-content: flex-end;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderLink = styled.div`
  padding: 10px 15px;
  background-color: ${props => props.signUp ? `${colors.signUpBlue}` : `${colors.signInBlue}` };
  border-bottom-left-radius: ${props => props.login ? '10rem' : ''};
  border-top-left-radius:${props => props.login ? '10rem' : ''};
  border-bottom-right-radius:${props => props.signUp ? '10rem' : ''};
  border-top-right-radius: ${props => props.signUp ? '10rem' : ''};
  box-shadow: 1px 0px 1px 1px rgba(2,0,0, 0.1) inset;
 :hover {
   background-color: ${colors.skyBlue};
 }
 a {
  color: ${colors.white};
 }
 @media(max-width: 414px){
  padding: 8px 10px;
  }
 `

const Ul = styled.ul`
 list-style: none;
 width: 100%;

 li {
  width: 100%;
  margin: 20px 0;
  font-size: 16px;
 }
 a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #1a83ff;
  color: ${ colors.white };
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: 1px 0px 1px 1px rgba(2,0,0, 0.1) inset;
  :hover{
  opacity: 0.7;
  }
 }
 `

const cName = {
  color: `${colors.white}`,
  backgroundColor: `#1a83ff`,
  opacity: `0.7`,
}


const Navbar = () => {
  const [open, setOpen ] = useState(false)

  const handleDrawer = () => {
    setOpen(true)
  }

  
  return (
    <div>
      <AppBar position="static" style={{margin: "50px 0px"} }>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={ handleDrawer }>
            <Icon name="bars" />
          </IconButton>
          <NavWrapper>
            <Nav />
            <ButtonWrapper>
              <HeaderLink login><Link to='/notes/create-note'><Icon name='plus' /></Link></HeaderLink>
              <HeaderLink signUp><Link to='/notes/create-note'>Create Note</Link></HeaderLink>
            </ButtonWrapper>
          </NavWrapper>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={ open }
        onClose={ () => setOpen( false ) }
      >
        <div style={ { width: "200px", marginRight: "20px", marginTop: "30px" } }>
          <div style={ { width: "50px", marginLeft: "50px", fontSize: "20px" } }>
          <Icon name='close' onClick={()=> setOpen(false)} style={{cursor: "pointer"}} />
          </div>
          <Ul>
            { NavbarData.map( ( item, index ) => {
              return (
                <li key={ index }>
                  <NavLink to={ item.path } exact activeStyle={ cName }><span style={ { margin: " 0 10px" } }>{ item.icon }</span><span>{ item.title }
                  </span>
                  </NavLink>
                </li>
              )
            } ) }
          </Ul>
        </div>
       
      </Drawer>
    </div>
  );
}

export default Navbar
