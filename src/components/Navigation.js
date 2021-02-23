import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <Navi>
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </Button>
    </Navi>
  )
}

const Navi = styled.nav`
  width: 100%;
  max-width: 414px;
  display: flex;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
`
