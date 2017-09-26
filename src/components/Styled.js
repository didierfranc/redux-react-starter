import styled from 'emotion/react'
import { Link } from 'react-router-dom'

export const Body = styled.div`
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 100;
  margin: 30px 30px 20px 30px;
`

const Github = styled.span`
  vertical-align: middle;
  padding: 6px 10px;
  border: 1px solid rgb(213, 213, 213);
  font-size: 14px;
  font-weight: 400;
  outline: none;
  font-family: sans-serif;
`

export const GithubButton = styled(Github)`
  border-radius: 3px 0 0 3px;
  background: rgb(248, 248, 248);
  &:hover {
    background: rgb(238, 238, 238);
  }
`

export const GithubCount = styled(Github)`
  margin-left: -1px;
  border-radius: 0 3px 3px 0;
  width: 100px;
`

export const GithubLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;
`

export const Message = styled.h2`
  font-family: sans-serif;
  font-weight: 100;
  margin-top: 30vh;
`

export const Blue = styled.span`color: rgb(0, 128, 255);`

export const FormTitle = styled.h1`
  font-family: sans-serif;
  font-weight: 100;
  margin-top: 22vh;
  margin-bottom: 50px;
  @media (max-width: 500px) {
    margin-top: 15vh;
  }
`

export const TextField = styled.input`
  display: block;
  height: 42px;
  width: 300px;
  margin: 10px auto;
  padding: 0 12px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  outline: none;
  font-size: 17px;
  box-sizing: border-box;
  appearance: none;
  &:focus {
    border-color: rgb(0, 128, 255);
  }
`

export const Submit = styled.input`
  border: none;
  color: rgb(0, 128, 255);
  font-size: 24px;
  background: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
`

export const FooterLink = styled(Link)`
  position: fixed;
  left: 0;
  bottom: 15px;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 100;
  text-decoration: none;
  color: rgb(10, 10, 10);
  &:hover {
    color: rgb(0, 0, 0);
  }
`
