import React from 'react'
import styled from 'styled-components/macro'
import HistoryEntry from './HistoryEntry'

export default function HistoryPage(history) {
  return (
    <HistoryWrapper>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
      ))}
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`
