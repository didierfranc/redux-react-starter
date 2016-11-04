import React from 'react'
import { Link } from 'react-router'

const url = 'https://raw.githubusercontent.com/didierfranc/react-async-starter/master/package.json'

const LoadMe = ({ load }) => (
  <a href={null} onClick={() => load(url)}>Load Me</a>
)

const List = props => (
  <div>
    <pre>{JSON.stringify(props.data, null, 2)}</pre>
    <Link to="/somewhere">Go somewhere</Link>
  </div>
)

const Main = props => (
  props.data.name ? <List {...props} /> : <LoadMe {...props} />
)

Main.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
}

List.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
}

LoadMe.propTypes = {
  load: React.PropTypes.func,
}

export default Main
