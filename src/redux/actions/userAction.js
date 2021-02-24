import { toast } from 'react-toastify'

import { USER, LOGOUT } from '../types'
import history from '../../history'

export const signUp = ( { firstName, lastName, email, password } ) => dispatch => {
  fetch( "/api/user/sign-up", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( {
      firstName,
      lastName,
      email,
      password
    } )
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        toast.error( data.error )
        return;
      }
      else {
        dispatch( { type: USER, payload: data } )
        toast.success( data.message )
        history.push( '/user/sign-in' )
      }
    } ).catch( err => {
      console.log( err )
    } );
};
export const signIn = ( { email, password } ) => dispatch => {
  fetch( "/api/user/sign-in", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( {
      email,
      password
    } )
  } ).then( res => res.json() )
    .then( data => {
      console.log( data )
      if ( data.error ) {
        toast.error( data.error )
        return;
      }
      else {
        dispatch( { type: USER, payload: data.user } )
        toast.success( data.message )
        localStorage.setItem( 'jwt', data.token )
        localStorage.setItem( 'user', JSON.stringify( data.user ) )
        history.push( '/notes' )
      }
    } ).catch( err => {
      console.log( err )
    } );
}


export const logout = () => dispatch => {
 return dispatch({type: LOGOUT, payload: null})
}