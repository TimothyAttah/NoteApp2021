import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DropdownNav from '../dropdown/Dropdown'
import {ButtonWrapper, HeaderLink} from '../nav/Navbar'


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderWrapper = () => {

    const user = JSON.parse( localStorage.getItem( 'user' ) )
    const renderHeader = () => {
      if ( user ) {
        return (
          <>
            <DropdownNav />
          </>
        )
      } else {
        return (
          <ButtonWrapper>
              <HeaderLink login><Link to='/user/sign-in'><Icon name='sign-in' /> Sign In</Link></HeaderLink>
              <HeaderLink signUp><Link to='/user/sign-up'><Icon name='sign-in' />Sign Up</Link></HeaderLink>
            </ButtonWrapper>
        )
      }
    }
 
  
  return (
    <>
      <Header>
        <Link to={user ? '/notes' : '/'}>
          <h1>  <Icon name='book' />Note3Sixty</h1>
        </Link>
        <nav>
          {renderHeader()}
        </nav>
      </Header>

    </>
  );
}

export default HeaderWrapper

// import React from 'react'
// import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
// //import { Menu, AccountCirle} from '@material-ui/icons '

// const HeaderWrapper = () => {
//   return (
//     <div>
//       <AppBar>

//       </AppBar>
//     </div>
//   )
// }

// export default HeaderWrapper;

