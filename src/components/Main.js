import React from 'react'
import { Link } from 'react-router'

const url = 'https://raw.githubusercontent.com/didierfranc/react-async-starter/master/package.json'

const Spinner = ({ load }) => (
  <a href="#" onClick={() => load(url)}>Load something ...</a>
)

const List = (props) => (
  <div>
    <pre>{JSON.stringify(props.data, null, 2)}</pre>
    <Link to="somewhere">Go somewhere</Link>
  </div>
)

const Main = (props) => (
  props.data.name ? <List {...props}/> : <Spinner {...props}/>
)

export default Main
