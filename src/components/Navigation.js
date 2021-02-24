import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <Navi>
      <NavButtons isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </NavButtons>
      <NavButtons isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </NavButtons>
    </Navi>
  )
}

const Navi = styled.nav`
  width: 100%;
  max-width: 414px;
  display: flex;
  margin: 0 auto;
`

const NavButtons = styled(Button)`
  background-color: ${props => (props.active ? 'white' : 'palevioletred')};
  color: ${props => (props.active ? 'palevioletred' : 'white')};
`
