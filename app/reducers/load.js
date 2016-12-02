const loaded = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_DATA':
      return action.data
    default:
      return state
  }
}

export default loaded
