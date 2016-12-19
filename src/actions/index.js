import { actionTypes as types, urls } from '../constants'
import { getToken } from '../helpers'

export const signup = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST })
  try {
    const res = await fetch(urls.SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const user = await res.json()
    dispatch({ type: types.SIGNUP_SUCCESS, user })
  } catch (e) {
    dispatch({ type: types.SIGNUP_FAILURE })
  }
}

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })
  try {
    const res = await fetch(urls.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const user = await res.json()
    dispatch({ type: types.LOGIN_SUCCESS, user })
  } catch (e) {
    dispatch({ type: types.LOGIN_FAILURE })
  }
}

export const loginWithToken = () => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })

  if (!getToken()) {
    dispatch({ type: types.LOGIN_FAILURE })
    return
  }

  try {
    const res = await fetch(urls.LOGIN_WITH_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: getToken() }),
    })
    const user = await res.json()
    dispatch({ type: types.LOGIN_SUCCESS, user })
  } catch (e) {
    dispatch({ type: types.LOGIN_FAILURE })
  }
}
