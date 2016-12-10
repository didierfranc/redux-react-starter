import React from 'react'
import { connect } from 'react-redux'
import { loadReadme } from '../actions'
import { Button, Readme, LinkTo } from './Styled'

const Home = ({ readme, loadReadme }) => (
  <div>
    <Button
      onClick={loadReadme}
      disabled={readme.text}
    >
      Load README.md
    </Button>
    <Readme>{readme.text}</Readme>
    <div>
      <LinkTo to="somewhere">Go somewhere</LinkTo>
    </div>
  </div>
)

Home.propTypes = {
  readme: React.PropTypes.shape({
    text: React.PropTypes.string,
    error: React.PropTypes.bool,
  }),
  loadReadme: React.PropTypes.func,
}

const mapStateToProps = state => ({ readme: state.readme })
export default connect(mapStateToProps, { loadReadme })(Home)
