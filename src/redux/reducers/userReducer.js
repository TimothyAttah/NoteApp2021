import { USER, LOGOUT} from '../types'

const initialState = {
  user: null
}

const user = ( state = initialState, action ) => {
  switch ( action.type ) {
    case USER:
      return {
        ...state,
       user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
       user: action.payload
      }
    default:
      return state
  }
}

export default user