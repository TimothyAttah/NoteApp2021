import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'

import { ButtonWrapper, HeaderLink } from '../nav/Navbar'
import { logout} from '../../redux/actions/userAction'
import history from '../../history'


const Main = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

`

const ProfileBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

p{
  margin: 0;
  padding:0;
}
`





  const user = JSON.parse( localStorage.getItem( 'user' ) )

const NewHeader = () => {
  const dispatch = useDispatch()
  const renderLogout = () => {
    localStorage.clear()
    dispatch( logout() )
    history.push('/')
  }
  
  return (
    <Main>
       <Link to='/notes'>
          <h1>  <Icon name='book' />Note3Sixty</h1>
      </Link>
      <div>
        { user ? (
           <ProfileBox>
           <p>Timothy Attah <Icon name='user' /></p>
           <Link to='#' onClick={()=> renderLogout()}>Logout</Link>
         </ProfileBox>
        ): (
           <ButtonWrapper>
           <HeaderLink login><Link to='/user/sign-in'><Icon name='sign-in' /> Sign In</Link></HeaderLink>
           <HeaderLink signUp><Link to='/user/sign-up'><Icon name='sign-in' />Sign Up</Link></HeaderLink>
         </ButtonWrapper>
       )}
      </div>
    </Main>
  )
}

export default NewHeader
