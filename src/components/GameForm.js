import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Input from './Input'

export default function GameForm({ onCreateGame }) {
  return (
    <GameFormForm onSubmit={handleSubmit}>
      <GameLabel>
        Add game:
        <Input name="nameOfGame" placeholder="e.g. Carcassonne" />
      </GameLabel>
      <GameLabel>
        Player names:
        <Input name="playerNames" placeholder="e.g. John Doe, Jane Doe" />
      </GameLabel>
      <Button>Create game</Button>
    </GameFormForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}

const GameFormForm = styled.form`
  display: grid;
  gap: 10px;
`
const GameLabel = styled.label`
  font-weight: bold;
  color: royalblue;
  border: none;
`
