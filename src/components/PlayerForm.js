import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <AddPlayerForm onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <input name="player" placeholder="Player name" />
      </label>
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
  border: 2px solid #bbb;
  width: 100%;
`
