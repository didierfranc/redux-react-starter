import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actionCreators from '../actions'

const url = 'https://raw.githubusercontent.com/didierfranc/react-async-starter/master/package.json'

const LoadMe = ({ load }) => (
  <button href={null} onClick={() => load(url)}>Load</button>
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

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
