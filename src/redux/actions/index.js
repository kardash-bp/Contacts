import Axios from 'axios'
import { ALL_CONTACTS, DEL_CONTACTS, ADD_CONTACT, EDIT_CONTACT } from './types'

export const allContacts = () => async (dispatch) => {
  const res = await Axios.get('../../users.json')
  if (!localStorage.hasOwnProperty('contacts')) {
    localStorage.setItem('contacts', JSON.stringify(res.data))
  }
  dispatch({
    type: ALL_CONTACTS,
    payload: JSON.parse(localStorage.getItem('contacts'))
  })
}
export const deleteContacts = (id) => {
  return {
    type: DEL_CONTACTS,
    payload: id
  }
}
export const addContact = (data) => {
  console.log(data)
  return {
    type: ADD_CONTACT,
    payload: data
  }
}
export const editContact = (data) => {
  console.log(data)
  return {
    type: EDIT_CONTACT,
    payload: data
  }
}
