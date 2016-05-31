const get = u => fetch(u).then(r => r.json())

const afterLoad = (data) => {
  return {
    type: 'LOAD_DATA',
    data
  }
}

export const load = (url) => {
  return async(dispatch) => {
    let data = await get(url)
    dispatch(afterLoad(data))
  }
}
