const loaded = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_DATA':
      return true
    default:
      return state
  }
}

export default loaded
