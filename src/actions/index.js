import { actionTypes as types, urls } from '../constants'

const get = u => fetch(u).then(r => r.text())

export const loadReadme = () => async (dispatch) => {
  dispatch({ type: types.LOAD_DATA })
  try {
    const text = await get(urls.README)
    dispatch({ type: types.LOAD_DATA_SUCCESS, text })
  } catch (e) {
    dispatch({ type: types.LOAD_DATA_ERROR })
  }
}
