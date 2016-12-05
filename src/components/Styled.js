import styled from 'styled-components'
import { Link } from 'react-router'

export const Body = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 100;
  margin: 80px 30px 30px 30px;
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
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  &:hover {
    background: rgb(149, 117, 205);
  }
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
  height: 500px;
  margin: 50px auto 10px auto;
`
