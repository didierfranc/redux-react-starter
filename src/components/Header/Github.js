import React from 'react'

import { GithubButton, GithubCount, GithubLink } from '../Styled'

class Github extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount = async () => {
    const url = 'https://api.github.com/repos/didierfranc/redux-react-starter'
    const res = await fetch(url).then(r => r.json())
    this.setState({ count: res.stargazers_count })
  }

  render = () => (
    <GithubLink
      href="http://github.com/didierfranc/redux-react-starter"
      target="_blank"
      rel="noopener"
    >
      <GithubButton>
        <Star /> Star
      </GithubButton>
      <GithubCount>{this.state.count}</GithubCount>
    </GithubLink>
  )
}

const Star = () => (
  <svg height="16" width="14" style={{ position: 'relative', top: 3 }}>
    <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z" />
  </svg>
)

export default Github
