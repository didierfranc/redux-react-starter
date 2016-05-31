import React from 'react'

const url = 'https://raw.githubusercontent.com/didierfranc/react-async-starter/master/package.json'

const Spinner = ({ load }) => (
  <p onClick={() => load(url)}>Loading ...</p>
)

const List = () => (
  <p>Loaded !</p>
)

const Main = (props) => (
  props.loaded ? <List {...props}/> : <Spinner {...props}/>
)

export default Main
