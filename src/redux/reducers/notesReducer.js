import {LIST_ALL_NOTES, CREATE_NOTE, DELETE_NOTE} from '../types'

const initialState = {
  notes: []
}

const notes = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LIST_ALL_NOTES:
      return {
        ...state,
       notes: action.payload
      }
    case CREATE_NOTE:
      return {
        ...state,
        notes: [ action.payload, ...state.notes ]
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter( note => {
          return note.id !== action.payload
        })
      }
    default: {
      return state
     }
  }
}

export default notes;