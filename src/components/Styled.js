import styled from 'styled-components'
import { Link } from 'react-router'

export const Body = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 100;
  margin: 60px 30px 20px 30px;
`

export const LinkTo = styled(Link)`
  line-height: 100px;
  font-family: sans-serif;
  color: rgb(126, 87, 194);
`

export const Button = styled.button`
  border: none;
  background: rgb(126, 87, 194);
  color: white;
  outline: none;
  margin-top: 60px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  &:hover {
    background: rgb(149, 117, 205);
  }
`

const Github = styled.span`
  vertical-align: middle;
  padding: 7px 8px;
  background: rgb(250, 250, 250);
  border: 1px solid lightgrey;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  font-family: sans-serif;
`

export const GithubButton = styled(Github)`
  border-radius: 5px 0 0 5px;
  &:hover {
    background: rgb(238, 238, 238);
  }
`

export const GithubCount = styled(Github)`
  margin-left: -1px;
  border-radius: 0 5px 5px 0;
  width: 100px
`

export const GithubLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;
`

export const Readme = styled.pre`
  font-family: monospace;
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 1px;
  background: rgb(34, 34, 34);
  color: lightgrey;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  overflow: scroll;
  width: 800px;
  max-width: 90%;
  height: 500px;
  max-height: 50vh;
  margin: 50px auto 10px auto;
`
