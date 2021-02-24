import styled from 'styled-components/macro'

export default function AppHeader({ title }) {
  return (
    <Header className="Header">
      <AppHeaderTitle>{title}</AppHeaderTitle>
    </Header>
  )
}

const Header = styled.header`
  text-align: center;
  background-color: royalblue;
`
const AppHeaderTitle = styled.h1`
  color: #fcfcfc;
  font-size: 1.2em;
  line-height: 0.8em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding-top: 5px;
`
