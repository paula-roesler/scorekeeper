import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <AddPlayerForm onSubmit={handleSubmit}>
      <Label>
        Add player:
        <br />
        <Input name="player" placeholder="Player name"></Input>
      </Label>
    </AddPlayerForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const AddPlayerForm = styled.form`
  width: 100%;
`
const Label = styled.label`
  font-weight: bold;
  color: royalblue;
`

const Input = styled.input`
  border: 2px solid royalblue;
  color: royalblue;
  margin-top: 5px;
  width: 100%;
`
