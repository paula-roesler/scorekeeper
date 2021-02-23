import styled from 'styled-components/macro'

export default function AppHeader({ title }) {
  return (
    <Header className="Header">
      <h1>{title}</h1>
    </Header>
  )
}

const Header = styled.header`
  text-align: center;
  background-color: royalblue;
  color: #fcfcfc;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding-top: 5px;
`
