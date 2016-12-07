import React from 'react'
import { bindActionCreators as bind } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions'

import { Title, Button, Readme, LinkTo, Body } from './Styled'
import Github from './Github'

const Home = ({ state, actions }) => (
  <Body>
    <Title>redux-react-starter</Title>
    <Github />
    <Button
      onClick={actions.loadReadme}
      disabled={state.readme.text}
    >
      Load README.md
    </Button>
    <Readme>{state.readme.text}</Readme>
    <div>
      <LinkTo to="somewhere">Go somewhere</LinkTo>
    </div>
  </Body>
)

Home.propTypes = {
  state: React.PropTypes.shape({
    readme: React.PropTypes.shape({
      text: React.PropTypes.string,
      error: React.PropTypes.bool,
    }),
  }),
  actions: React.PropTypes.shape({
    loadReadme: React.PropTypes.func,
  }),
}

const mapStateToProps = state => ({ state: { readme: state.readme } })
const mapDispatchToProps = dispatch => ({ actions: bind(actionCreators, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Home)
