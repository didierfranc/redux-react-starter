import { actionTypes as types } from '../constants'

const get = u => fetch(u).then(r => r.json())

export const load = url => async (dispatch) => {
  dispatch({ type: types.LOAD_DATA })
  try {
    const data = await get(url)
    dispatch({ type: types.LOAD_DATA_SUCCESS, data })
  } catch (e) {
    dispatch({ type: types.LOAD_DATA_ERROR })
  }
}
