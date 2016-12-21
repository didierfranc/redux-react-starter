import { actionTypes as types, urls } from '../constants'
import { getToken, post } from '../helpers'

export const signup = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST })

  await post({
    url: urls.SIGNUP,
    body: { email, password },
    dispatch,
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
  })
}

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })

  await post({
    url: urls.LOGIN,
    body: { email, password },
    dispatch,
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
  })
}

export const loginWithToken = () => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })

  if (!getToken()) {
    dispatch({ type: types.LOGIN_FAILURE })
    return
  }

  await post({
    url: urls.LOGIN_WITH_TOKEN,
    body: { token: getToken() },
    dispatch,
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
  })
}
