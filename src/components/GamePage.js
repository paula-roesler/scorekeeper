import React from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import Button from './Button'
import Player from './Player'

export default function GamePage({
  nameOfGame,
  players,
  onPlus,
  onMinus,
  onReset,
  onEnd,
}) {
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <ButtonGroup>
        <Button onClick={onReset}>Reset scores</Button>
        <Button onClick={onEnd}>End game</Button>
      </ButtonGroup>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 10px;
`
const ButtonGroup = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 40px;
`
