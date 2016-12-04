const loaded = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA_SUCCESS':
      return action.data
    default:
      return state
  }
}

export default loaded
