import React, {useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';

import history from './history';
import HeaderWrapper from './components/header/NewHeader';
import Home from './pages/home/Home';
import CreateNote from './pages/notes/CreateNote';
import Notes from './pages/notes/Notes';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';
import Profile from './pages/profile/Profile';

const MainWrapper = styled.div`
	border: 2px solid red;
	*{
		box-sizing: border-box;
		ul {
			list-style: none;
			padding: 0; 
  margin: 0;
		}
	}
`
export const user = JSON.parse( localStorage.getItem( 'user' ) )


const App = () => {
	useEffect( () => {
		if ( user )
			return user		
	}, [] );
	
	return (
		<MainWrapper className='ui container'>
			<ToastContainer
				position="top-right"
				autoClose={ 3000 }
				hideProgressBar={ false }
				newestOnTop={ false }
				closeOnClick
				rtl={ false }
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Router history={ history }>
				<HeaderWrapper />
				{ user ? (
					<Switch>
						<Route path='/user/profile' component={ Profile } />
						<Route path='/notes' exact component={ Notes } />
						<Route path='/notes/create-note' component={ CreateNote } />
						<Redirect to='/notes' />
					</Switch>
				) : (
						<Switch>
							<Route path='/' exact component={ Home } />
							<Route path='/user/sign-in' component={ SignIn } />
							<Route path='/user/sign-up' component={ SignUp } />
							<Redirect to='/' />
						</Switch>
					) }
			</Router>
		</MainWrapper>
	)
}

export default App
