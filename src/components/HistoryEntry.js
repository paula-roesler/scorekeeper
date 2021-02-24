import React from 'react'
import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <Wrapper>
      {nameOfGame}
      {players.map((player, index) => (
        <Player key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </Player>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
`

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`
