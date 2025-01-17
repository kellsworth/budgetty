import axios from 'axios'

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData() {
  let data = axios.get('/auth/user-data').then(res => res.data)
  console.log(data)
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}



export default function reducer(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case REQUEST_USER_DATA + '_FULFILLED':
      return { ...state, ...action.payload.user }
    default:
      return state
  }
}