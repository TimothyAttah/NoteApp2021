import axios from 'axios';

const url = 'http://localhost:5000';

export const signIn = () => axios.post(`${url}/api/user/sign-up`)

export const fetchNotes = () => axios.get( `${ url }/notes` );

export const createNote = ( newNote ) => axios.post( `${ url }/notes`, newNote );
