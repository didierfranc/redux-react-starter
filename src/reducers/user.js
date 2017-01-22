import { getToken, storeToken, clearToken } from '../helpers'
import { actionTypes as types } from '../constants'

const initialState = {
  token: getToken(),
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      storeToken(action.data.token)
      return action.data
    case types.LOGIN_FAILURE:
      clearToken()
      return {}
    default:
      return state
  }
}

export default auth
