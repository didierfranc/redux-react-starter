const loaded = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_DATA_SUCCESS':
      return { text: action.text, error: false }
    case 'LOAD_DATA_ERROR':
      return { text: null, error: true }
    default:
      return state
  }
}

export default loaded
