import { CREATE_NOTE, LIST_ALL_NOTES, DELETE_NOTE } from '../types'

import { toast } from 'react-toastify'
import history from '../../history';


export const getNotes = () => dispatch => {
  fetch("/api/notes/allNotes", {
    headers: {
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
}).then(res=>res.json())
  .then( data => {
  console.log(data.notes)
    dispatch({type: LIST_ALL_NOTES, payload:data.notes}) 
}).catch(err => {
    console.log(err)
})
}

  export const createNote = ({ title, content}) => dispatch => {
    fetch("/api/notes/create-note", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+localStorage.getItem('jwt')
        },
      body: JSON.stringify( {
        title,
       content
        })
    }).then(res=>res.json())
      .then( data => {
      console.log(data)
       if(data.error){
         toast.error( data.error )
         return;
       }
       else {
        dispatch({type: CREATE_NOTE, payload:data})
         toast.success( data.message )
        history.push('/notes') 
       }
    }).catch(err => {
        console.log(err)
    })
       
}

export const deleteNotes = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}
