import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <NavButtons
        isActive={currentPage === 'play'}
        onClick={() => onNavigate('play')}
      >
        Play
      </NavButtons>
      <NavButtons
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
        History
      </NavButtons>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  max-width: 414px;
  display: flex;
  margin: 0 auto;
`

const NavButtons = styled(Button)`
  background-color: ${props => (props.active ? 'white' : 'royalblue')};
  ${props =>
    props.isActive &&
    'background-color: white; color: royalblue; border: 2px solid royalblue'}
`
