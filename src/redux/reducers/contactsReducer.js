import {
  ALL_CONTACTS,
  DEL_CONTACTS,
  ADD_CONTACT,
  EDIT_CONTACT
} from '../actions/types'

const initialState = []

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_CONTACTS:
      return [...action.payload]
    case DEL_CONTACTS:
      return state.filter((elem) => elem.id !== action.payload)
    case ADD_CONTACT:
      return [action.payload, ...state]
    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id.toString() === action.payload.id ? action.payload : contact
      )
    default:
      return state
  }
}
